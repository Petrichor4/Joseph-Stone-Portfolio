import { FormControl } from "@rewind-ui/core";
import { Button } from "@rewind-ui/core";
import { Alert } from "@rewind-ui/core";
import "../styles/contact.css";

export default function Contact() {
  const validateEmail = () => {
    const emailVal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = document.getElementById('email');
    const emailAlert = document.querySelector('.emailAlert')

    if (!emailVal.test(email.value)) {
      emailAlert.className = 'emailAlert'
    } else {
      emailAlert.className = 'emailAlert hidden'
    }
  };

  const validateMessage = () => {
    const message = document.getElementById('message');
    const messageAlert = document.querySelector('.messageAlert');
    if (message.value.trim() === '') {
      messageAlert.className = 'messageAlert'
    } else {
      messageAlert.className = 'messageAlert hidden'
    }
  }

  const validateForm = (e) => {
    e.preventDefault()
    validateEmail()
    validateMessage()
  }

  return (
    <main>
      <div className="form">
        <FormControl>
          <FormControl.Label id="name">Name</FormControl.Label>
          <FormControl.Input
            radius="base"
            required
            tone="solid"
          />
          <FormControl.Label>Email Address</FormControl.Label>
          <FormControl.Input
            id="email"
            onBlur={validateEmail}
            radius="base"
            required
            tone="solid"
          />
          <FormControl.Label>Message</FormControl.Label>
          <FormControl.Textarea id="message" tone="solid" radius="base" onBlur={validateMessage}></FormControl.Textarea>
        </FormControl>
        <div className="emailAlert  hidden">
          <Alert
          radius="base"
          tone="solid"
          color="red"
          title="Form Error"
          iconType="error"
          className="mt-4">
            Email is Invalid
            </Alert>
        </div>
        <div className="messageAlert  hidden">
          <Alert
          radius="base"
          tone="solid"
          color="red"
          title="Form Error"
          iconType="error"
          className="mt-4">
            Message is required
            </Alert>
        </div>

        <Button 
          onClick={validateForm}
          className="mt-4"
          radius="base">
          Submit
        </Button>
      </div>
    </main>
  );
}
