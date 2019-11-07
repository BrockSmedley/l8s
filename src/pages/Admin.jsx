import React, { Component } from 'react';
// import Dante from 'Dante2';

// export default (props) => {
//     const [content, setContent] = useState(null);

//     return (
//         // <div className="uk-container uk-padding">

//         // </div>
//         <Dante
//             content={content}
//             onChange={editor => { setContent(editor.emitSerializedOutput()); console.log(editor.emitSerializedOutput()); }}
//         />
//     )
// }

// class Admin extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             content: null
//         };
//         this.setContent = this.setContent.bind(this);
//     }
//     setContent(content) {
//         this.setState({ content });
//     }
//     render() {
//         return (
//             <Dante
//                 content={this.state.content}
//                 onChange={editor => { this.setContent(editor.emitSerializedOutput()); console.log(editor.emitSerializedOutput()); }}
//             />
//         )
//     }
// }

export default (props) => {
    return (
        <div style={{ margin: 200, padding: 200 }}>
            testing...
        </div>
    );
}

// export default Admin;