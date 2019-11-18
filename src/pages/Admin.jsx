import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RichTextEditor from 'react-rte';
import uuid from 'uuidv4';
import axios from 'axios';

class Editor extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        onChangeTitle: PropTypes.func,
        onBlur: PropTypes.func
    };

    state = {
        value: RichTextEditor.createEmptyValue(),
        title: "",
        id: uuid()
    }

    onChange = (value) => {
        this.setState({ value });
        if (this.props.onChange) {
            // Send the changes up to the parent component as an HTML string.
            // This is here to demonstrate using `.toString()` but in a real app it
            // would be better to avoid generating a string on each change.
            this.props.onChange(
                value.toString('html')
            );
        }
        console.log(value);
    };

    onChangeTitle = (e) => {
        this.setState({ title: e.target.value });
    };

    trimValue(value) {
        return value.replace(/[\r\n]+/gm, "")
    }

    formatValue(value) {
        return (this.trimValue(value.toString('html'))).toString();
    }

    onBlur = () => {
        let body = this.formatValue(this.state.value);
        // save state to DB if there's a title and some content
        if (this.state.title && this.state.value && body.length > 1) {
            console.log(body.length);
            console.log(`saving to DB ${this.state.id}`);
            this.save(body, false);
        }
        else {
            console.log("empty... not saving.");
        }
    };

    save = (body, published) => {
        // save post to DB
        axios.post('http://localhost:8080/blogpost', {
            uid: this.state.id,
            title: this.state.title,
            body,
            published,
        });
    };

    publish = () => {
        // publish post
        let body = this.formatValue(this.state.value);
        this.save(body, true);
    };

    render() {
        return (
            <div>
                <input className="uk-input" type="text" id="title" name="title" placeholder="Title" onChange={this.onChangeTitle} value={this.state.title}></input>
                <RichTextEditor
                    value={this.state.value}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                />
                <button onClick={this.publish}>PUBLISH</button>
            </div>
        );
    }
}

export default (props) => {
    return (
        <div style={{ margin: 200, padding: 200 }}>
            testing...
            <Editor />
        </div>
    );
}