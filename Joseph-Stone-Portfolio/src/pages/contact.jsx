import { FormControl } from "@rewind-ui/core";
import { Textarea } from "@rewind-ui/core";
import { Input } from "@rewind-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import "../styles/contact.css";

export default function Contact() {
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
