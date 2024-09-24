import React from 'react'
import Layout from '@theme/Layout';
import policyStyles from '/src/scss/_policy.module.scss';

export default function Refund() {
    return (
      <Layout title="Policy Refund" description="Policy Refund Page">
        <section className={policyStyles.policy}>
          <h1>Refund Policy</h1>
            <hr />
            <br />
            <br />

            <h2>Article 1 (Purpose)</h2>
            <h4>
              The purpose of these terms is to define the rights, obligations, responsibilities, and other necessary matters between the members (hereinafter referred to as “subscribers”) who have subscribed and paid for the company’s subscription service, which guarantees the use of services at a discounted rate for a certain period, provided by Cloudro Co., Ltd. (hereinafter referred to as “the company”).
              <br />
              <br />
              These terms take precedence over the terms of use for the Cloud Studio service and apply only to “subscribers.
            </h4>

            <br />
            <br />
            <h2>Article 2 (Definition of Terms)</h2>
            <h4>
            The definitions of key terms used in these terms shall follow the terms of use for the Cloud Studio service.
            </h4>

            <br />
            <br />
            <h2>Article 3 (Subscription Service Enrollment and Payment Methods)</h2>
            <h4>
              Members can subscribe to the subscription service by clicking the button within the app, which will take them to the subscription enrollment screen (hereinafter referred to as the “Subscription Information Screen”). By clicking the button to change to the PRO plan, the subscriber enters into a subscription agreement with the company and authorizes the company to charge the subscription fee for the contract period (one month from the date of contract) at the price presented at the time of purchase.
              <br />
              <br />
              If the company has notified the subscriber that the subscription will automatically renew before the subscription agreement is finalized, the subscriber's subscription will automatically renew on the last day of the contract period unless the subscriber personally terminates it or the company does so. If the subscriber wishes to terminate the subscription, they must cancel it according to the method specified in Article 4 of these terms before the last day of the current period. Otherwise, the subscription fee for the following month will be automatically charged to the credit card registered by the subscriber in the company’s app.
            </h4>

            <br />
            <br />
            <h2>Article 4 (Validity Period of Content Created During Subscription)</h2>
            <h4>
              The validity period of the content created by the subscriber during the subscription is valid until the member withdraws from the service.
            </h4>

            <br />
            <br />
            <h2>Article 5 (Methods for Terminating the Subscription Service)</h2>
            <h4>
              Subscribers can cancel their subscription at any time by clicking the button to change to the FREE plan (or a similarly named button) on the subscription service screen. Upon cancellation, the subscription remains effective until the next payment date, and the subscription will expire on that payment date if not renewed.
            </h4>

            <br />
            <br />
            <h2>Article 6 (Subscription Withdrawal)</h2>
            <h4>
            Subscribers cannot withdraw from the subscription if they have used the subscription service even once after the subscription start date or if more than 7 days have passed since the subscription start date. If the subscriber has used the service less than once and wishes to withdraw within 7 days of the start date, they may contact the company's customer service to request a withdrawal, and the company will issue a full refund within 7 business days.
            </h4>

            <br />
            <br />
            <h2>Article 7 (Change and Suspension of Subscription Plan)</h2>
            <h4>
            The company has an obligation to reasonably continue operations to maintain the subscriber's benefits. However, in the event that any of the following circumstances occur, the company may suspend part or all of the subscription service.
            </h4>

            <br />
            <br />
            <h2>Article 8 (Subscription Fees)</h2>
            <h4>
            The specific details of the monthly usage fee for the “Subscription Service” will be posted within the application, and the subscription fee may change according to the company's pricing policy.
            <br />
            (1) In the event of inclement weather, natural disasters, war, riots, fire, strikes, labor disputes, government controls, or other reasons beyond the company's reasonable control, which may occur or are anticipated to occur.
            <br />
            (2) If telecommunication services are not provided by the telecommunications operator.
            <br />
            (3) If there are issues such as maintenance, inspection, replacement, or malfunction of information and communication facilities, including the company's systems, or if communication is disrupted.
            <br />
            (4) In the case of services provided through partnerships with third parties, if such partnerships are changed or suspended due to circumstances on the part of the partner.
            <br />
            (5) If any other circumstances arise that significantly hinder the company’s smooth operation. The company will not be liable for any damages incurred by the subscriber due to changes or suspensions in the “Subscription Service” resulting from any of the above circumstances, unless there is intent or negligence on the part of the company.
            </h4>
            
            <br />
            <br />
            <h2>Supplementary Provisions</h2>
            <h4>
            These terms shall take effect from February 1, 2023.
            </h4>
        </section>
        <br />
        <br />
      </Layout>
    );
  }
