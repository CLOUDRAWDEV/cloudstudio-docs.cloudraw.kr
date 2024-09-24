import React from 'react'
import Layout from '@theme/Layout';
import policyStyles from '/src/scss/_policy.module.scss';

export default function Service() {
    return (
      <Layout title="Policy Service" description="Policy Service Page">
        <section className={policyStyles.policy}>
          <h1>Terms of Service</h1>
          <hr />
          <section className={policyStyles.policy__space}>
            <br />
            <h2>Chapter 1: General Provisions</h2>
              <h3>Article 1 (Purpose)</h3>
              <h4>The purpose of these terms is to define the rights, obligations, and responsibilities between Cloudro Co., Ltd. (hereinafter referred to as "the company") and users (those who agree to these terms and complete user registration, hereinafter referred to as "users") when users sign up for and use the Cloud Studio service (hereinafter referred to as "the service") provided by the company.
              <br />
              <br />
              (1) The company shall post the contents of these terms on the service terms page in a manner that allows users to easily understand them.
              <br />
              (2) The company may amend these terms within the scope that does not violate relevant laws such as the Act on the Promotion of Digital Contents Industry, the Act on Promotion of Information and Communications Network Utilization and Information Protection, the Personal Information Protection Act, the Act on the Protection and Use of Location Information, the Framework Act on Consumers, and other relevant laws related to consumer protection and the regulation of terms.
              <br />
              (3) When the company amends these terms, it shall clearly indicate the existing terms, the amended terms, the effective date of the amendments, and the reasons for the amendments. These will be posted on the service homepage at least 15 days before the effective date of the amendments, and if the changes are disadvantageous to the user, at least 30 days before the effective date and for a considerable period thereafter.
              <br />
              (4) If the company notifies users as outlined in the previous paragraph and clearly states that a lack of objection within 7 days of the effective date of the amended terms will be considered acceptance, the amended terms will be deemed accepted if no objections are raised. If users do not agree to the amended terms, they may terminate the usage contract in accordance with Article 17, Paragraph 1.
              </h4>
          </section>

            <section className={policyStyles.policy__space}>
            <h2>Chapter 2: Registration and Management</h2>
              <h3>Article 3 (User Registration Process)</h3>
              <h4>
              (1) If a service user reads these terms and clicks the "Agree" button or checks "Confirm" or similar options, they are deemed to have agreed to these terms.
              <br />
              (2) User registration for service use is completed by filling out the required fields, including the user ID, in the user registration form provided by the company, and then clicking the "Register" or "Confirm" button.
              </h4>

              <br />
              <h3>Article 4 (Establishment, Reservation, and Rejection of User Registration)</h3>
              <h4>
              (1) User registration is established when a service user's application for user registration, as per the procedure outlined in Article 3, is accepted by the company. The company must accept the registration without delay once the applicant has completed the registration form with the required information. However, exceptions apply if additional documents are required beyond the submission of the registration form.
              <br />
              (2) The company may refuse user registration in the following cases:
                <br />
                - If the application contains false information or is submitted with false documents.
                <br />
                - If the company, based on relevant laws or regulations, deems that the registration could clearly violate public order or moral standards.
              </h4>

              <br />
              <h3>Article 5 (Responsibility for Managing User ID, etc.)</h3>
                <h4>
                Users are responsible for managing their user ID and password for service use, as well as any disadvantages arising from intentional misconduct or negligence, such as unauthorized use of their ID by a third party. However, the company will be held liable if this is caused by the company's intentional misconduct or negligence.
                </h4>

                <br />
                <h3>Article 6 (Collection of Personal Information)</h3>
                <h4>
                The company collects the necessary personal information from users in accordance with relevant laws and regulations to provide the service.
                </h4>
            </section>

            <section className={policyStyles.policy__space}>
            <h3>Article 7 (Use of the Service)</h3>
              <h4>
              (1) The service can be used immediately after the company grants approval for service use.
              <br />
              (2) As a general rule, the service is available 24 hours a day, 365 days a year (00:00-24:00), except in cases where it is not possible due to business or technical issues. However, for reasons such as regular maintenance of service facilities, the company may divide the service into specific sections and set separate dates and times for each.
              </h4>

              <br />
              <h3>Article 8 (Notification of Changes to the Service)</h3>
              <h4>
              (1) If the company changes the service content or terminates the service, it may notify the user of such changes or termination via email sent to the user's registered email address.
              <br />
              (2) In cases where notifications are made to an unspecified number of users, the company may notify users through the website or other company notice pages.
              </h4>

                <br />
                <h3>Article 9 (Restriction and Suspension of Service Use)</h3>
                  <h4>
                  (1) The company may restrict or suspend the user's access to the service in the following cases:
                  <br />
                  - If the user intentionally or negligently disrupts the operation of the company's service.
                  <br />
                  - If the user violates the obligations set forth in Article 11.
                  <br />
                  - If service maintenance, repair, or construction is unavoidable.
                  <br />
                  - If the telecommunications service provided by a common carrier, as defined by the Telecommunications Business Act, is suspended.
                  <br />
                  - If service use is disrupted due to a national emergency, equipment failure, or excessive service demand.
                  <br />
                  - If the company deems it inappropriate to continue providing the service due to other significant reasons.
                  <br />
                  (2) When the company restricts or suspends the service in accordance with the preceding paragraph, it must notify the user of the reason and the duration of the restriction.
                  </h4>

                <br />
                <h3>Article 10 (Company's Obligations)</h3>
                  <h4>
                  (1) The company must diligently maintain, inspect, and restore facilities related to the provision and security of the service to ensure continuous and stable service delivery.
                  <br />
                  (2) The company will not send commercial advertising emails or SMS messages to users without their prior consent for such communications.
                  <br />
                  (3) The company will not disclose or distribute the user's personal information obtained in connection with service provision to third parties without the user's consent and will make efforts to protect it. Other matters related to the protection of users' personal information shall be governed by the Information and Communications Network Act and the company's separately established "Privacy Policy."
                  <br />
                  (4) If the company enters into service provision contracts with third parties to provide services to users, it will specify the specific user information to be provided to third parties for each individual service and will obtain the user's explicit consent. The user's personal information will be shared with third parties only within the agreed scope and only during the service provision period, in compliance with relevant laws.
                  </h4>

                <br />
                <h3>Article 11 (User's Obligations)</h3>
                  <h4>
                  Users must not engage in any of the following actions:
                  <br />
                  - Providing false information during user registration or modification.
                  <br />
                  - Altering the information posted on the company's service or using the information obtained through the service for commercial or non-commercial purposes, including reproduction, publication, or broadcasting, without the company's prior approval, or providing it to third parties.
                  <br />
                  - Using the service to offer promotional opportunities to third parties, acting as an agent to promote third parties in exchange for monetary compensation, or transferring the right to use the service to others in exchange for money.
                  <br />
                  - Posting false information about the company or third parties, infringing on intellectual property rights, or violating the rights of the company or third parties.
                  <br />
                  - Misusing another user's ID and password to unfairly access the service.
                  <br />
                  - Collecting, storing, or disclosing other users' personal information without their consent.
                  <br />
                  - Modifying, reverse engineering, decompiling, or disassembling the software provided by the company.
                  <br />
                  - Violating any applicable laws, the terms of service set by the company, or other rules related to service usage.
                  </h4>
                
                <br />
                <h3>Article 12 (Prohibition of Transfer)</h3>
                  <h4>
                  Users are not allowed to transfer, gift, or use their right to receive services as collateral for any purpose.
                  </h4>

                <br />
                <h3>Article 12 (Prohibition of Transfer)</h3>
                  <h4>
                  Users are not allowed to transfer, gift, or use their right to receive services as collateral for any purpose.
                  </h4>
            </section>

            <section className={policyStyles.policy__space}>
            <h2>Chapter 4: Miscellaneous</h2>
              <h3>Article 14 (Disclaimer)</h3>
                <h4>
                The company is not liable for any damages incurred by users if the company is unable to provide services due to the following circumstances:
                  <br />
                  - In the event of natural disasters or other acts of God or similar forces beyond the company's control
                  <br />
                  - When a third party, with whom the company has entered into a service partnership agreement, causes disruption
                  <br />
                  - In cases of intentional interference with the service
                  <br />
                  - When service disruptions occur due to the user's own fault
                  <br />
                  - Other cases where the company is not at fault, excluding items 1 to 3
                </h4>

                <br />
                <h3>Article 15 (Applicability of Regulations)</h3>
                  <h4>
                  For matters not specified in these terms, relevant laws shall apply, and in cases where the law is not specified, customary practices shall govern.
                  </h4>

                  <br />
                  <h3>Supplementary Provisions</h3>
                  <h4>
                  These terms shall take effect from February 1, 2023. However, for new users who joined during the period from the announcement of these terms until the effective date, these terms shall apply from the time of user registration.
                  </h4>
            </section>
            <br />
            <br />
        </section>
      </Layout>
    );
  }
