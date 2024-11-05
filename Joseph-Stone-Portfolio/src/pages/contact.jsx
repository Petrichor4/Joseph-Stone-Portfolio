import { FormControl } from "@rewind-ui/core";
import "../styles/contact.css";

export default function Contact() {
  // const validate = () => {
    
  // }
  return (
    <main>
      <div className="form">
        <FormControl>
          <FormControl.Label>Name</FormControl.Label>
          <FormControl.Input
            required
            tone="solid"
            placeholder="Enter Name Here"
          />
          <FormControl.Label>Email Address</FormControl.Label>
          <FormControl.Input
            required
            tone="solid"
            placeholder="Enter Email Here"
          />
          <FormControl.Label>Message</FormControl.Label>
          <FormControl.Textarea tone="solid"></FormControl.Textarea>
        </FormControl>
      </div>
    </main>
  );
}
