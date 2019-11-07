import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RichTextEditor from 'react-rte';
import uuid from 'uuidv4';

class Editor extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        onChangeTitle: PropTypes.func,
        onBlur: PropTypes.func
    };
    id = uuid();

    state = {
        value: RichTextEditor.createEmptyValue(),
        title: ""
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
    onBlur = () => {
        // save state to DB if there's a title and some content
        if (this.state.title && this.state.value && (this.trimValue(this.state.value.toString('markdown'))).toString().length > 1) {
            console.log(
                (this.trimValue(this.state.value.toString('markdown'))).toString().length
            );
            console.log(`saving to DB ${this.id}`);
        }
        else {
            console.log("empty... not saving.");
        }
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