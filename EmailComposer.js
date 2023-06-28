/*import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Button } from 'react-bootstrap';

const EmailComposer = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [recipientEmail, setRecipientEmail] = useState('');

  const handleSendEmail = async () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const emailContent = JSON.stringify(rawContentState);

    try {
      // Simulating the email sending process
      const response = await sendEmail(recipientEmail, emailContent);

      // Reset the form after successful email sending
      setEditorState(EditorState.createEmpty());
      setRecipientEmail('');

      // Show success message to the user
      alert('Email sent successfully!');
    } catch (error) {
      // Handle any errors that occur during email sending
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  const sendEmail = (recipient, content) => {
    // Simulating the email sending process
    return new Promise((resolve, reject) => {
      // Replace this code with your actual email sending logic
      setTimeout(() => {
        const success = Math.random() < 0.8; // Simulating 80% success rate
        if (success) {
          resolve('Email sent successfully!');
        } else {
          reject(new Error('Failed to send email.'));
        }
      }, 2000); // Simulating a 2-second delay
    });
  };

  return (
    <div>
      <h2>Email Composer</h2>
      <div>
        <label>Recipient's Email:</label>
        <input
          type="email"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Message:</label>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>
      <Button variant="primary" onClick={handleSendEmail}>
        Send Email
      </Button>
    </div>
  );
};

export default EmailComposer ; */

import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Button } from 'react-bootstrap';
import './EmailCompose.css';
const EmailComposer = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [recipientEmail, setRecipientEmail] = useState('');

  const handleSendEmail = async () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const emailContent = JSON.stringify(rawContentState);// Send email logic
  };

  return (
    <div className="email-composer-container">
      <h2 className="email-composer-title">Compose Email</h2>
      <div className="form-group">
        <label className="form-label">Recipient's Email:</label>
        <input
          type="email"
          className="form-input"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label">Message:</label>
        <Editor editorState={editorState} onEditorStateChange={setEditorState} />
      </div>
      <Button variant="primary" onClick={handleSendEmail}>
        Send Email
      </Button>
    </div>
  );
};

export default EmailComposer;
