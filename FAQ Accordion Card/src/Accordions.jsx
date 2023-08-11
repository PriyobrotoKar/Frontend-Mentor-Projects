import React from "react";
import Accordion from "./Accordion";

const Accordions = () => {
  return (
    <div className="text-Verydarkdesaturatedblue text-sm space-y-4 mt-10">
      <Accordion
        ques="How many team members can I invite?"
        ans="You can invite up to 2 additional users on the Free plan. There is no
          limit on team members for the Premium plan."
      />
      <Accordion
        ques="What is the maximum file upload size?"
        ans="No more than 2GB. All files in your account must fit your allotted storage
      space. "
      />
      <Accordion
        ques="How do I reset my password?"
        ans="Click “Forgot password” from the login
      page or “Change password” from your profile page. A reset link will be
      emailed to you."
      />
      <Accordion
        ques="Can I cancel my subscription?"
        ans=" Yes! Send us a message and
      we’ll process your request no questions asked."
      />
      <Accordion
        ques=" Do you provide additional
      support?"
        ans=" Chat and email support is available 24/7. Phone lines are open
      during normal business hours."
      />
    </div>
  );
};

export default Accordions;
