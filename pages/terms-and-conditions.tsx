import { GetStaticProps } from "next";
import Head from "next/head";
import "@/styles/old/normalize.css";
import "@/styles/old/components.css";
import "@/styles/old/p-42.css";
import Header from "@/components/old/header";
import Footer from "@/components/old/footer";
import Link from "next/link";
import { BasicPageProps } from "@/utils/props";

export default function TermsAndConditions({ domain, crmURL }: BasicPageProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>TERMS AND CONDITIONS</title>
        <meta name="description" content="TERMS AND CONDITIONS" />
        <link href={`https://${domain}/terms-and-conditions`} rel="canonical" />
        <meta property="og:type" content="website" />
        <script
          type="text/javascript"
          id="pageGroup"
          dangerouslySetInnerHTML={{
            __html: `window.pageGroup="Legal"`,
          }}
        />
      </Head>

      <Header crmURL={crmURL} staticBg={true} />

      <div className="site">
        <div className="section-fixed">
          <div className="container-138">
            <div className="h-160"></div>

            <div className="post-rich w-richtext">
              <h1>TERMS AND CONDITIONS</h1>
              <p>Effective as of September 19, 2023</p>
              <p>
                <strong>
                  PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY. BY CLICKING
                  [REGISTRATION] AND/OR [CONFIRM AND PLACE ORDER] AND/OR
                  [PROCEED] USER OR EXPERT AGREES TO BE BOUND BY THESE TERMS OF
                  SERVICE.
                </strong>
              </p>
              <p>
                These Terms and Conditions constitute an agreement (the
                “Agreement”) by and between Platform Provider and User or Expert
                (the “party”, collectively referred to as the “parties”). This
                Agreement is effective as of the date User or Expert clicks
                “[Registration]” and/or “[Confirm and Place Order]” and/or
                “[Proceed]” (the “Effective Date”). User’s or Expert’s use of
                and Platform Provider’s provision of Software as a service and
                are governed by this Agreement.
              </p>
              <p>
                EACH PARTY ACKNOWLEDGES THAT IT HAS READ THIS AGREEMENT,
                UNDERSTANDS IT, AND AGREES TO BE BOUND BY ITS TERMS.
              </p>
              <p>
                WHEREAS, there are huge arrays of information in open sources
                such as Internet, books, magazines, articles, papers, blogs etc,
              </p>
              <p>
                WHEREAS, people seek for different information via Internet etc,
              </p>
              <p>
                WHEREAS, taking into account globalization processes and setting
                up of new professions in different creative fields,
              </p>
              <p>
                WHEREAS, the further the harder to recognize reliable and
                competent information for further using for obtaining initial
                and expanding existing knowledge in different field of science,
              </p>
              <p>
                THE Platform Provider decided to create a Platform where Users
                and Experts may directly communicate between each other to
                facilitate processes of obtaining and systematization existing
                and new knowledge for further learning and self-education in
                different fields of science according to the Terms and
                Conditions governed by this Agreement.
              </p>
              <p>
                <strong>1. DEFINITIONS</strong>
              </p>
              <p>
                1.1. “<strong>User</strong>” (you, your or other similar
                pronouns) – any individual who uses the Platform and/or
                registered an Account to place offers and obtain Services via
                Platform and classified on the Platform as a “User”.
              </p>
              <p>
                1.2. “<strong>Expert</strong>” (you, your or other similar
                pronouns) – any individual with a registered Account, who
                possesses a certain level of knowledge or skill relating to a
                particular subject or activity and uses the Platform to provide
                Services to the Users and classified on the Platform as an
                “Expert”.
              </p>
              <p>
                1.3. “<strong>Platform</strong>” – Website owned by the Platform
                Provider which serves as a means, where Users can place offers
                and receive Services and Expert Services, and Experts can accept
                offers and provide Deliverables or Expert Services to the Users.
              </p>
              <p>
                1.4. “<strong>Website</strong>” – this website available under
                the domain: https://{domain}/, including all the subdomains and
                relevant pages.
              </p>
              <p>
                1.5. “<strong>Platform Provider</strong>” (we, our or other
                similar pronouns) – Cthrsis OÜ, company number: 16428415,
                registered office address: Tallinn, Kesklinna linnaosa,
                Vesivarava tn 50-201, 10152, Estonia.
              </p>
              <p>
                1.6. “<strong>Services</strong>” – an opportunity for Experts
                and Users to communicate directly via Platform administered by
                the Platform Provider for obtaining materials duly systematized
                by Experts based on User&apos;s requirements directly discussed
                by Users and Experts via Platform and expressed in different
                forms as defined under the term “Deliverables” and “Expert
                Services” below. Services also include but are not limited to
                ensuring security of the transactions, technical maintenance of
                the file servers of the Platform and customer support, cost of
                Deliverables or Expert Services.
              </p>
              <p>
                1.7. “<strong>Order</strong>” – request (offer) submitted and
                published (placed) on the Platform by the User with individual
                number (ID) to obtain the Services which include details on the
                topic, minimum word count, Price, any related information and
                deadline for the Deliverables provision, and which will be or
                already accepted by the Expert.
              </p>
              <p>
                1.8. “<strong>Price</strong>” – full and final price of the
                Services in USD, which include the price of the Services, all
                bonuses and/or discounts, if any. The full Price of Services and
                its components such as Services Fee, Expert Services and
                Transaction Fee will be shown to the User on the Account before
                placement of an Order via Account and by Notification after
                placement and confirmation of an Order via Account. After
                placing an Order by the User the Agreement between the Parties
                is deemed binding and the Price is considered as reasonable by
                all Parties to the Agreement.
              </p>
              <p>
                1.9. “<strong>Balance</strong>” – total amount of funds
                available in the User’s or Expert’s Account.
              </p>
              <p>
                1.10. “<strong>Account</strong>” – User’s or Expert’s personal
                page on the Platform with all the personal details and
                information related to the Services provision.
              </p>
              <p>
                1.11. “<strong>Notification</strong>” – official notification
                from the Platform Provider on any actions of the User and/or
                Expert relating to the Services provision or any other matter
                related to the performance of this Agreement, which might
                include additional documents.
              </p>
              <p>
                1.12. “<strong>Deliverables</strong>” or “Expert Services” – any
                results provided by the Expert to the User via the Platform.
                Such Deliverables may be expressed in the variety of writing
                forms such as papers, reports, creative writing, marketing
                copywriting, including press release copywriting and social
                media copywriting, cover letter writing, resume writing, CV
                writing, web content writing, blog post writing, expert
                research, LinkedIn® resume writing etc. etc. For the avoidance
                of doubt, any results under the term Services and/or
                Deliverables in this Agreement cannot be used by Users as an
                accomplished form and shall be used strictly for facilitation of
                understanding different fields of sciences and facilitation of
                obtaining new or expanding existing knowledge.
              </p>
              <p>
                1.13. “<strong>Revision</strong>” – any request of the User made
                via the Platform addressed to the Expert to modify the
                Deliverables.
              </p>
              <p>
                1.14. “<strong>Middleman</strong>” – service in which Platform
                Provider operates as a third-party middleman to oversee
                financial transactions between the User or/and the Expert via
                Platform and gives instructions to the bank or to other
                financial or payment institutions such Stripe, Payoneer etc. to
                transfer funds under the instructions of the User or/and Expert.
              </p>
              <p>
                1.16. “<strong>Services Fee</strong>” – a fee collected by the
                Platform Provider for providing an access to the Platform to
                Experts and Users for obtaining Services. Service fee is
                calculated as a percentage, based on Price and types of services
                ordered by the User. The full amount of Services Fee and its
                components will be shown to the User on the Account before
                placement of an Order and by Notification after placement of an
                Order via Account.
              </p>
              <p>
                1.17. “<strong>Transaction fee</strong>” – a fee collected by
                the Platform Provider for Services provided to the Users and
                Experts via Platform for withdrawal or deposit of funds through
                the payment institution chosen by a User. Transaction fees can
                be included into the Services Fee.
              </p>
              <p>
                1.18. “<strong>Paper bank</strong>” – list of Deliverables that
                were not accepted by the Users and assigned by the User to
                Platform Provider.
              </p>
              <p>
                1.19. “<strong>Order balance</strong>” – amount of Price
                temporarily withdrawn from the User’s Balance and associated
                with a particular Order. After the Approval, the funds from the
                Order balance are transferred to the Expert Balance.
              </p>
              <p>
                1.20. “<strong>Approval</strong>” – acceptance by the User of
                the Deliverables provided by the Expert, which shall be deemed
                automatically within 14 (fourteen) calendar days of the
                Deliverables provision.
              </p>
              <p>
                1.21. “<strong>Refund request</strong>” – a request filed by the
                User via Account or in case of Order cancellation by the Expert,
                instructing the Platform Provider to perform its Middleman
                function and assist with withdrawing the Order amount of funds
                from the Order balance and transferring them to the User’s
                Balance.
              </p>
              <p>
                1.22. “<strong>Withdrawal request</strong>” – a request filed by
                the User or Expert via Account instructing the Platform Provider
                to perform its Middleman function and assist with withdrawal and
                transfering to the User’s and/or Expert’s personal bank account
                any amount of funds available on the Account Balance.
              </p>
              <p>
                1.23. “<strong>Paper bank deal</strong>”<strong> </strong>- the
                assignment agreement concluded between the User and Platform
                Provider via Platform for the assignment of all right, title,
                and interest in and to the particular Deliverables created for
                the User on the basis of his Order where as the User’s
                remuneration for the assignment he shall be entitled: (a) to
                receive full amount of the previous Order Price to his Account
                Balance; or (b) to create a new Order and transfer full amount
                of previous Order Price to the new Order balance. The User shall
                initiate the Paper bank deal by contacting the Platform Provider
                support.
              </p>
              <p>
                <strong>2. SUBJECT MATTER</strong>
              </p>
              <p>
                2.1.<strong> Services.</strong> During the term of this
                Agreement, the User and Expert may access and use the Platform
                (to register an Account, order and accept Services and
                Deliverables, view processing Orders, provide Deliverables, make
                comments and reviews of the Deliverables, deposit and withdraw
                funds from Account Balance and use any other features or
                functions available on the Platform).
              </p>
              <p>
                2.2. The Platform Provider provides access to the Platform for
                Service Fee for every User and Expert.
                <br />
                Platform Provider retains all rights, title, and interest in and
                to the Platform, including without limitation all software
                included in and used to provide the Services and all logos and
                trademarks reproduced through the Platform. This Agreement does
                not grant User or Expert (a) any right to reproduce, modify,
                distribute, or publicly display or perform the software included
                in the Services or (b) any other right to the Services not
                specifically set forth herein.
              </p>
              <p>
                2.3. Access to the Platform could be restricted, suspended, or
                withdrawn fully, or in part by the Platform Provider at any time
                by Notification. The Platform could be updated or changed
                without any prior notice.
              </p>
              <p>
                2.4. Middleman<strong>.</strong> The Platform Provider provides
                services of Middleman (transaction management) according to the
                instructions of the User or Expert and acts as an agent on
                behalf of the User or Expert in connection with transactions for
                the Services by communicating with banks or other financial
                institutions such Stripe, Payoneer etc., which may be used by
                Users and Experts for depositing and transacting funds while
                communicating via Platform. The Platform Provider reflects all
                transactions made by financial institutions according to the
                instructions of the User or Expert on the Users and Experts
                Accounts on the Platform. By using the Platform the User or
                Expert can create an Account with a personal Balance on which
                funds can be held and accessible for further use on the
                Platform.
              </p>
              <p>
                2.5. During the term of this Agreement, from time to time the
                User may deposit funds to recharge the Balance using the
                Platform or withdraw funds. The Platform Provider has the right
                to charge a Transaction fee for such instructions by Users which
                will be shown to Users on the Account and by Notification.
              </p>
              <p>
                2.6. During the term of this Agreement, from time to time the
                Expert may receive funds to his Balance or withdraw them. The
                Platform Provider has the right to charge an Transaction fee
                from the Expert’s Balance for such instructions by Expert’s
                which will be shown to Experts on the Account and by
                Notification..
              </p>
              <p>
                2.7. The Platform Provider reserves the right not to provide
                (terminate) the Middleman service at its discretion and is not
                obliged to justify the User and/or Expert for doing so. In case
                of termination of Middleman service provision, the Platform
                Provider is obliged to reimburse the remaining funds on the
                User’s or Expert’s Balance no later than 40 (forty) calendar
                days from the termination date.
              </p>
              <p>
                2.8. <strong>General</strong>. Platform Provider will (a) make
                the Platform available to you pursuant to this Agreement, (b)
                provide applicable Platform Provider’s standard support, (c) use
                commercially reasonable efforts to make the Platform available
                24 hours a day, 7 days a week, except for: (i) planned downtime
                (of which Platform Provider shall give advance electronic
                Notification); and (ii) any unavailability caused by
                circumstances beyond Platform Provider’s reasonable control,
                including, for example, an act of God, act of government, flood,
                fire, earthquake, civil unrest, act of terror, strike, war or
                other labor problem (other than one involving Platform
                Provider’s employees), Internet service provider failure or
                delay.
              </p>
              <p>
                <strong>3. REGISTRATION</strong>
              </p>
              <p>
                3.1. To use the Platform as the User or Expert, you shall need
                to complete the registration process by filling in your personal
                information requested on the registration form on the Website.
              </p>
              <p>
                3.2. By registering via the Website you hereby accept the
                Platform’s terms outlined in the Agreement. Please read and
                review the Agreement carefully before accepting the terms.
              </p>
              <p>
                3.3. You must be at least 16 (sixteen) years old and have the
                legal capacity to enter into binding agreements. By registering
                as a User or Expert, you represent and warrant that you meet
                these requirements.
              </p>
              <p>
                3.3. As an Expert, you must have the necessary qualifications,
                experience, and expertise to provide Services on the Platform.
                By registering as an Expert, you represent and warrant that you
                meet these requirements. The Platform Provider has the right to
                request a confirmation of the Expert’s qualifications and the
                latter shall be obliged to provide any such confirmation
                (including copies of documents).
              </p>
              <p>
                3.4. By completing the registration process, you represent and
                warrant that all information provided is accurate, current, and
                complete and that you will maintain the accuracy and
                completeness of this information throughout the use of the
                Platform.
              </p>
              <p>
                3.5. The Platform Provider reserves the right, at its
                discretion, to request confirmation of personal information
                provided by the Users or Experts during registration on the
                Platform, such as identity or other documents. In such cases,
                the Provider may preventively temporarily suspend the Account by
                providing you a Notification, until the requested information is
                provided. This measure might be taken in cases where the Account
                is suspected of being involved in any suspicious or fraud
                activities.
              </p>
              <p>
                3.6. If you fail to provide the requested information or
                supporting documents within 10 (ten) calendar days since the
                respective Notification, the Platform Provider reserves the
                right to permanently block and/or delete the Account.
              </p>
              <p>
                3.7. You are allowed to have only one Account on the Platform.
                Creating multiple Accounts is strictly prohibited. If we detect
                that you have created more than one Account, we reserve the
                right to terminate all Accounts associated with you by blocking
                or deleting such Accounts, at our sole discretion but providing
                you with a Notification.
              </p>
              <p>
                3.8. We reserve the right to reject any registration, in our
                sole discretion, for any reason or no reason at all. We may also
                terminate your registration by blocking and/or deleting an
                Account, or restrict your access to the Platform, at any time at
                our sole discretion but providing you with a Notification, if we
                believe that you have violated the terms of the Agreement or any
                applicable laws or regulations.
              </p>
              <p>
                3.9. By completing the registration process, you agree to
                receive communications (including Notifications) from us,
                including but not limited to email and push notifications,
                regarding your use of the Platform, as well as concerning
                Services provided and Deliverables. You may opt out of receiving
                certain communications (including marketing communications) by
                contacting our support: support@{domain},
                support@mondaycontent.com.
              </p>
              <p>
                <strong>4. ORDER PLACEMENT AND FULFILLMENT. REFUNDS</strong>
              </p>
              <p>
                4.1.<strong> Order placement</strong>. By using the Platform
                and, in particular, via Account, the User has the right to place
                an Order for Services, review active Orders and their progress,
                Order drafts and closed Orders. After the Order placement, the
                information included in Order would be publicly available to all
                the Experts. The User has the right to place Orders without any
                limitation based on the Account Balance.
              </p>
              <p>
                4.2. The Order shall include details on the topic, minimum word
                count, Price, any related information and deadline for the
                Deliverables provision. The Order estimated Price for the
                Services is calculated by the Platform based on the Order
                details automatically.
              </p>
              <p>
                4.3. To place an Order the User shall need to deposit funds to
                recharge the Balance using the available method.
              </p>
              <p>
                4.4.<strong> Order balance</strong>. If User’s Balance has
                enough funds for the Order placement, he has the right to place
                the Order, instructing the Platform Provider to withdraw the
                Order amount of funds from the Account Balance and transfer them
                to the Order balance. If User’s Balance would not have enough
                funds for the Order placement, he will be transitioned to a
                separate page to recharge the Balance. After successful Order
                placement, the User will receive a Notification informing that
                under the instructions of the User, Platform Provider has
                transferred the User’s funds available on the Account Balance to
                the Order balance.
              </p>
              <p>
                4.5. After the transfer of the User’s funds to the Order balance
                is assigned with status “In Progress”, meaning that it is
                fulfilling by the Expert.
              </p>
              <p>
                4.6. <strong>Order cancellation before the acceptance</strong>.
                Before the Order has been accepted by the Expert and approved by
                the User, the latter has the right to cancel any such Order via
                the Account on the particular Order page. If a User cancels an
                Order prior to an Expert accepting it and it being approved by
                the User, they are requesting that the Platform Provider cease
                displaying the Order to Experts and indicating that the Order is
                no longer required.
              </p>
              <p>
                4.7.<strong> Order acceptance</strong>. By using the Platform
                and, in particular, via Account, the Expert has the right to
                accept an Order placed by a User, review active or accepted, or
                closed Orders. The Expert has the right to accept Orders without
                any limitation.
              </p>
              <p>
                4.8. By accepting an Order the Expert hereby agrees on the terms
                outlined in the Order for the provision of Deliverables. After
                the Order acceptance and the Expert approval by the User the
                Order will be assigned with status “In Progress”, meaning that
                the Expert has accepted it and started working on it. Order
                Price with status “In Progress” can be increased by the User’s
                and Expert’s mutual agreement.
              </p>
              <p>
                4.9. By using the Platform and, in particular, via Account, the
                Expert has the right to communicate with the User, request
                additional information and instructions, and upload Deliverables
                (drafts and final versions).
              </p>
              <p>
                4.10. The Expert is obliged to adhere to the Order terms and
                provide the User with Deliverables before the deadline specified
                in the Order.
              </p>
              <p>
                4.11.<strong> Order modification</strong>. After the Order
                placement in most instances it cannot be modified by the User or
                Expert, unless otherwise is agreed by both parties.
              </p>
              <p>
                4.12. <strong>Additional instructions</strong>. By using the
                Platform and, in particular, via Account, the User has the right
                to communicate with an Expert and provide additional
                instructions when the Order is in progress. It is recommended to
                specify the sources and give them to the Expert if the User
                needs any particular materials to be used in the Deliverables.
              </p>
              <p>
                4.13. The Expert, in cases, where additional instructions are
                outside the scope of the Order work shall communicate with the
                User and negotiate on change of the Order Price.
              </p>
              <p>
                4.14. In cases where the User and Expert have agreed on the
                increase of Order Price for the additional instructions, the
                User can make an additional payment via the Order page,
                instructing the Platform Provider to withdraw the additional
                Order amount of funds from the Account Balance and transfer them
                to the Order balance. The User will receive a Notification
                informing that under the instructions of the User, the Platform
                Provider has performed said transaction and it was successful.
              </p>
              <p>
                4.18. <strong>Order cancellation after the acceptance</strong>.
                After the Order has been accepted by the Expert and confirmed by
                the User, the latter has the right to cancel any placed Order
                via the Account on the particular Order page if (a) the period
                of actual Order fulfillment does not exceed 50% of the total
                period till the deadline for the Deliverables provision and
                Deliverables draft was not uploaded by an Expert or downloaded
                by the User or (b) Deliverables draft was uploaded by an Expert
                and/or downloaded by the User and such cancellation was approved
                by the Platform Provider, based on the particular circumstances
                of the case, where the Expert has violated the Order terms.
              </p>
              <p>
                4.19. By canceling an Order the User is instructing the Platform
                Provider to perform a Refund request in the Order amount. The
                User will receive a Notification informing that under the
                instructions of the User, the Platform Provider has performed a
                Refund request.
              </p>
              <p>
                4.20. After the Order has been accepted by the Expert, the
                latter has the right to cancel its acceptance via the Account on
                the particular Order page. In such a case, the User is
                instructing the Platform Provider to perform a Refund request in
                the Order amount. The User will receive a Notification informing
                that under the instructions of the User, the Platform Provider
                has performed a Refund request.
              </p>
              <p>
                4.21. <strong>Order fulfillment</strong>. During the Order term
                the Expert shall provide the User with a draft of the
                Deliverables. The User has the right to review the draft and
                provide additional instructions or information, resources,
                materials to the Expert.
              </p>
              <p>
                4.22. The Expert shall provide the User with the final version
                of the Deliverables before the deadline specified in the Order.
              </p>
              <p>
                4.23. <strong>Approval</strong>. After the provision of the
                Deliverables the User has the right to review the Deliverables
                within 14 (fourteen) calendar days of the Deliverables
                provision.
              </p>
              <p>
                4.24. If the User before the Approval date has not provided a
                Refund request or Revision request, the Deliverables shall be
                deemed Approved. After the Approval the Expert shall provide the
                User with an invoice for the Services rendered. In such cases,
                the User is instructing the Platform Provider to withdraw the
                funds in the Order amount from Order balance and transferring
                them to the Expert’s Account Balance. The User will receive a
                Notification informing that under the instructions of the User,
                the Platform Provider has performed said transaction and it was
                successful.
              </p>
              <p>
                4.25. The Platform Provider has the right to charge an
                Transaction fee from the Expert’s Balance after Approval. The
                Transaction fee shall be reimbursed by the Platform Provider in
                case of User’s Order cancellation and Refund request.
              </p>
              <p>
                4.26. Expert agrees that Order Price can be reimbursed and shall
                not be available for the Withdrawal request before the
                expiration of period for the Approval.
              </p>
              <p>
                4.27. <strong>Tips</strong>. The User shall have the right to
                leave a tip to the Expert by instructing the Platform Provider
                to withdraw the funds in the desired amount from his Account
                Balance and transferring them to the Expert’s Account Balance.
                The User will receive a Notification informing that under the
                instructions of the User, the Platform Provider has performed
                such a transaction. Tip is not refundable for the User.
              </p>
              <p>
                4.28.{" "}
                <strong>
                  No satisfaction before the Approval and Revision.
                </strong>{" "}
                If within 14 (fourteen) calendar days of the Deliverables
                provision date, the Deliverables do not conform to their
                specification outlined in the Order, the Deliverables shall be
                deemed not Approved. In such cases, the User shall have the
                right (a) to contact Platform Provider support:{" "}
                <Link href={`mailto:support@${domain}`}>support@{domain}</Link>{" "}
                to resolve the matter or (b) request Deliverables Revision via
                “Revision” button in the Account.
              </p>
              <p>
                4.29. By requesting for Deliverables Revision the User shall
                provide the Expert with additional agreed time-frame for the
                modification of Deliverables (according to the initial deadline,
                but not less than 3 hours; if the initial deadline has passed,
                the User can choose any time-frame, but not less than 12 hours)
                and/or additional instructions. After the updated Order
                acceptance it will be assigned with status “In Progress”,
                meaning that the Expert has accepted it and started working on
                it.
              </p>
              <p>
                4.30. If User abuses his right for the Deliverables Revision,
                the Platform Provider reserves the right to permanently block
                and/or delete such User’s Account and/or cancel the Order,
                providing Notification and transferring to the User’s personal
                bank account any amount of funds available on the Account
                Balance and/or Order balance.
              </p>
              <p>
                <strong>4.31. No Deliverables.</strong> If the Expert has not
                provided the User with the final version of the Deliverables
                before the deadline stipulated in Order, the User shall have the
                right to cancel the Order. By canceling an Order the User is
                instructing the Platform Provider to perform a Refund request in
                the Order amount. The User will receive a Notification informing
                that under the instructions of the User, the Platform Provider
                has performed a Refund request.
              </p>
              <p>
                4.32.{" "}
                <strong>
                  No satisfaction after the Approval and Paper bank deal
                </strong>
                . If after the expiration of 14 (fourteen) calendar days after
                the Deliverables provision date, the User is still not satisfied
                with the Expert’s Services and the Deliverables, he shall
                contact the Platform Provider support:{" "}
                <Link href={`mailto:support@mondaycontent.com`}>
                  mailto:support@mondaycontent.com
                </Link>
                . After the consideration of the matter by the support and in
                case of User’s reasonable remarks and complaints about the
                Deliverables, the User shall have the right to provide a request
                for the Paper bank deal.
              </p>
              <p>
                4.33. By requesting a Paper bank deal the User is assigning to
                the Platform Provider all right, title, and interest in and to
                the particular Deliverables created for the User on the basis of
                his Order.
              </p>
              <p>
                4.34. As the User’s remuneration for the said assignment he
                shall be entitled: (a) to receive full amount of the previous
                Order Price to his Account Balance; or (b) to create a new Order
                and transfer full amount of previous Order Price to the new
                Order balance. The User shall communicate his choice via a
                Platform Provider support: support@
                {domain}.
              </p>
              <p>
                4.35. By requesting to receive the full amount of the previous
                Order Price, the User shall assign all right, title, and
                interest in and to the particular Deliverables created for the
                User on the basis of his Order and the Platform Provider shall
                be obliged to increase the User’s Account Balance by the amount
                of the previous Order Price. The User will receive a
                Notification informing on the successful transaction.
              </p>
              <p>
                4.36. By requesting to create a new Order and transfer full
                amount of previous Order Price to the new Order balance, the
                User shall assign all right, title, and interest in and to the
                particular Deliverables created for the User on the basis of his
                Order and the Platform Provider shall be obliged to create a new
                Order with status “Bidding” and increase such Order’ balance by
                the amount of the previous Order Price. The User will receive a
                Notification informing on the successful transaction. After the
                updated Order acceptance it will be assigned with status “In
                Progress”, meaning that the Expert has accepted it and started
                working on it.
              </p>
              <p>
                4.37. In cases as described in Section 4.36. and 4.37. of the
                Agreement, the Platform Provider shall be entitled to all the
                rights for the Deliverables and the latter shall be placed in
                the Paper bank.
              </p>
              <p>
                3.38. The Expert, if the amount of funds in his Account Balance
                is enough, has the right to buy Deliverables from Platform
                Provider’s Paper bank, by instructing the Platform Provider to
                transfer the Expert’s funds available in the Account Balance to
                the Order balance. The Expert will receive a Notification
                informing that under the instructions of the Expert, the
                Platform Provider has performed transfer of funds.
              </p>
              <p>
                4.39. If User abuses his right stipulated in Section 3.35. of
                this Agreement, the Platform Provider reserves the right to
                permanently block and/or delete such User’s Account, providing
                Notification and transferring to the User’s personal bank
                account any amount of funds available on the Account Balance
                and/or Order balance.
              </p>
              <p>
                4.41. <strong>Withdrawal</strong>. The User and Expert have the
                right to instruct the Platform Provider to perform a Withdrawal
                request in the Account Balance amount. The User or Expert will
                receive a Notification informing that under the instructions of
                the User or Expert, the Platform Provider has performed
                Withdrawal request. In case of Withdrawal request by the User,
                the latter shall be charged with a Transaction fee, amount of
                which is indicated in the Account.
              </p>
              <p>
                4.42. <strong>Changing of the Order deadline</strong>. The
                Expert shall have the right to request the User with the
                changing of Order deadline.
              </p>
              <p>
                4.43. <strong>Discount</strong>. The Expert shall have the right
                to provide the User with a discount of Order Price via Account.
              </p>
              <p>
                4.44. The Platform Provider encourages Users and Experts to
                resolve the disputes arising from the Services and Deliverables
                provision by communication via the Platform. In some cases, the
                User and Expert can contact the Platform Provider’s support:
                support@{domain}, which will try helping to resolve the dispute
                that has arisen.
              </p>
              <p>
                <strong>5. INTELLECTUAL PROPERTY RIGHTS</strong>
              </p>
              <p>
                5.1.
                <strong> Platform Provider intellectual property rights</strong>
                . The Platform Provider retains all right, title, and interest
                in and to the Platform, including without limitation all
                software used to provide the Services and all graphics, user
                interfaces, logos, text and trademarks reproduced through the
                Platform. This Agreement does not grant the User or Expert any
                intellectual property license or rights in or to the Platform or
                any of its components, except to the limited extent that such
                rights are necessary for the User’s and Expert’s use of the
                Platform as specifically authorized by this Agreement. The User
                or Expert recognizes that the Platform and its components are
                protected by copyright and other laws.
              </p>
              <p>
                5.2. Platform Provider has not agreed to and does not agree to
                treat as confidential any feedback (any suggestion or idea for
                improving or otherwise modifying any of Platform Provider’s
                products or services) that the User and/or Expert give Platform
                Provider, and nothing in this Agreement or in the parties’
                dealings arising out of or related to this Agreement will
                restrict Platform Provider’s right to use, profit from,
                disclose, publish, keep secret, or otherwise exploit feedback,
                without compensating or crediting the User and/or Expert.
                Feedback will not be considered User’s and/or Expert’s trade
                secret.
              </p>
              <p>
                5.3.{" "}
                <strong>Intellectual property rights to Deliverables</strong>.
                After the creation of any Deliverables (including drafts or
                final versions) the Expert shall be vested with all right,
                title, and interest in and to the Deliverables.
              </p>
              <p>
                5.4.{" "}
                <strong>Intellectual property rights after Approval</strong>.
                Immediately after the Order Approval the Expert hereby assigns
                to the User all of its ownership, right, title, and interest in
                and to all Deliverables Approved, including, without limitation:
                (a) all copyrights, rights in trade secrets, and other
                intellectual property rights and all other rights that may
                hereafter be vested relating to the Deliverables Approved,
                arising under English law or any other laws; (b) all goodwill
                associated with Deliverables Approved; and (c) waives to the
                extend available under the applicable law and undertakes not to
                enforce any and all moral rights, including, without limitation,
                the right to prohibit any modification of the Deliverables
                Approved; and (d) all benefits, privileges, causes of action,
                and remedies relating to any of the foregoing, whether before or
                hereafter accrued (including without limitation the exclusive
                rights to apply for such registrations, renewals, and
                extensions, to sue for all past infringements or violations of
                any of the rights, and to settle and retain proceeds from any
                such actions).
              </p>
              <p>
                5.5.{" "}
                <strong>
                  Intellectual property rights after Paper bank deal.{" "}
                </strong>
                In case of Paper bank deal the User hereby assigns to the
                Platform Provider all of its ownership, right, title, and
                interest in and to all Deliverables, including, without
                limitation: (a) all copyrights, rights in trade secrets, and
                other intellectual property rights and all other rights that may
                hereafter be vested relating to the Deliverables, arising under
                English law or any other laws; (b) all goodwill associated with
                Deliverables; and (c) waives to the extend available under the
                applicable law and undertakes not to enforce any and all moral
                rights, including, without limitation, the right to prohibit any
                modification of the Deliverables; and (d) all benefits,
                privileges, causes of action, and remedies relating to any of
                the foregoing, whether before or hereafter accrued (including
                without limitation the exclusive rights to apply for such
                registrations, renewals, and extensions, to sue for all past
                infringements or violations of any of the rights, and to settle
                and retain proceeds from any such actions).
              </p>
              <p>
                5.6. In case if Expert buys the Deliverables from Platform
                Provider’s Paper bank under Section 4.39. of this Agreement the
                Platform provider hereby assigns to the Expert all of its
                ownership, right, title, and interest in and to all such
                Deliverables, including, without limitation: (a) all copyrights,
                rights in trade secrets, and other intellectual property rights
                and all other rights that may hereafter be vested relating to
                the Deliverables, arising under English law or any other laws;
                (b) all goodwill associated with Deliverables; and (c) waives to
                the extend available under the applicable law and undertakes not
                to enforce any and all moral rights, including, without
                limitation, the right to prohibit any modification of the
                Deliverables; and (d) all benefits, privileges, causes of
                action, and remedies relating to any of the foregoing, whether
                before or hereafter accrued (including without limitation the
                exclusive rights to apply for such registrations, renewals, and
                extensions, to sue for all past infringements or violations of
                any of the rights, and to settle and retain proceeds from any
                such actions).
              </p>
              <p>
                5.7.{" "}
                <strong>
                  Intellectual property rights after Deliverables Revision.{" "}
                </strong>
                In case of Deliverables Revision after the Order cancellation
                under Section 4.30. of the Agreement, the User hereby assigns to
                the Expert all of its ownership, right, title, and interest in
                and to all Deliverables, including, without limitation: (a) all
                copyrights, rights in trade secrets, and other intellectual
                property rights and all other rights that may hereafter be
                vested relating to the Deliverables, arising under English law
                or any other laws; (b) all goodwill associated with
                Deliverables; and (c) waives to the extend available under the
                applicable law and undertakes not to enforce any and all moral
                rights, including, without limitation, the right to prohibit any
                modification of the Deliverables; and (d) all benefits,
                privileges, causes of action, and remedies relating to any of
                the foregoing, whether before or hereafter accrued (including
                without limitation the exclusive rights to apply for such
                registrations, renewals, and extensions, to sue for all past
                infringements or violations of any of the rights, and to settle
                and retain proceeds from any such actions).
              </p>
              <p>
                5.8. <strong>Limited license</strong>. The User and Expert
                hereby grants Platform Provider a perpetual, irrevocable, fully
                paid, royalty-free, worldwide license to reproduce the
                Deliverables on the Platform, without the right to sublicense.
                The User and Expert grants the license under copyright and also,
                solely to the extent necessary to exercise such rights, under
                patent and any other applicable intellectual property rights.
              </p>
              <p>
                5.9. <strong>Survival</strong>. The rights and obligations under
                this section will survive any termination or expiration of this
                Agreement.
              </p>
              <p>
                <strong>6. REPRESENTATIONS AND WARRANTIES</strong>
              </p>
              <p>
                6.1. Platform Provider represents and warrants that it is the
                owner of the Platform and of each and every component thereof,
                or the recipient of a valid license thereto, and that it has and
                will maintain the full power and authority to grant the rights
                to use the Platform set forth in this Agreement without the
                further consent of any third party. Platform Provider’s
                representations and warranties in the preceding sentence do not
                apply to use of the Platform in combination with hardware or
                software not provided by Platform Provider.
              </p>
              <p>
                6.2. In case of breach of the warranty above in this Section
                6.1., Platform Provider, at its own expense, shall promptly (a)
                secure for the User or Expert the right to continue using the
                Platform; (b) replace or modify the Platform to make it
                noninfringing, or if such remedies are not commercially
                practical in Platforms Provider’s reasonable opinion.
              </p>
              <p>
                6.3. Platform Provider represents and warrants that it is not
                engaged in arranging or advertising relevant services (as
                defined under the Skills and Post-16 Education Act) related to
                academic cheating and academic dishonesty for financial gain as
                stipulated under UK Skills and Post-16 Education Act or any
                other similar act to be enacted.
              </p>
              <p>
                6.4. The Expert and User represents and warrants that: (a) it
                has the full right and authority to enter into, execute, and
                perform its obligations under this Agreement and that no pending
                or threatened claim or litigation known to it would have a
                material adverse impact on its ability to perform as required by
                this Agreement; (b) it has accurately identified itself and it
                has not provided any inaccurate information about itself to or
                through the Platform; and (c) it is an individual 16 (sixteen)
                years or older, or; and (d) not to upload, not to publish,
                store, provide access to, or otherwise, distribute the
                information and/or materials that violate rights of any third
                party (including plagiarized materials); and (e) it would not
                utilize manual methods, bots, crawlers, or other automated means
                to gather information or content in order to generate or combine
                it, directly or indirectly, in one or more downloads, a
                collection, compilation, database, directory, or anything
                similar; and (f) the Platform Provider is not a party to any
                agreements, arrangements and contractual relationships that may
                arise between Users and Experts of the Platform; and (g) you do
                not enter into an employment relationship with the Platform
                Provider and is not an employee of the latter; and (h) you are
                not engaged in providing, arranging or advertising relevant
                services (as defined under the Skills and Post-16 Education Act)
                related to academic cheating for financial gain as stipulated
                under UK Skills and Post-16 Education Act or any other similar
                act to be enacted.
              </p>
              <p>
                6.5. <strong>Warranty Disclaimers</strong>. Except to the extent
                set forth in the Agreement, USER AND EXPERT ACCEPTS THE PLATFORM
                “AS IS,” WITH NO REPRESENTATION OR WARRANTY OF ANY KIND, EXPRESS
                OR IMPLIED, INCLUDING WITHOUT LIMITATION IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON
                INFRINGEMENT OF INTELLECTUAL PROPERTY RIGHTS, OR ANY IMPLIED
                WARRANTY ARISING FROM STATUTE, COURSE OF DEALING, COURSE OF
                PERFORMANCE, OR USAGE OF TRADE. WITHOUT LIMITING THE GENERALITY
                OF THE FOREGOING: (a) PLATFORM PROVIDER HAS NO OBLIGATION TO
                INDEMNIFY OR DEFEND USER AND EXPERT AGAINST CLAIMS RELATED TO
                INFRINGEMENT OF INTELLECTUAL PROPERTY; (b) PLATFORM PROVIDER
                DOES NOT REPRESENT OR WARRANT THAT THE PLATFORM WILL PERFORM
                WITHOUT INTERRUPTION OR ERROR; AND (c) PLATFORM PROVIDER DOES
                NOT REPRESENT OR WARRANT THAT THE PLATFORM IS SECURE FROM
                HACKING OR OTHER UNAUTHORIZED INTRUSION OR THAT USER OR EXPERT
                DATA WILL REMAIN PRIVATE OR SECURE; AND (d) PLATFORM PROVIDER
                HAS NO OBLIGATION TO INDEMNIFY OR DEFEND USER AND EXPERT AGAINST
                CLAIMS RELATED TO ACADEMIC MISCONDUCT.
              </p>
              <p>
                <strong>7. INDEMNIFICATION</strong>
              </p>
              <p>
                7.1. The User and/or Expert shall defend, indemnify, and hold
                harmless Platform Provider against any indemnified claim,
                meaning any third party claim, suit, or proceeding arising out
                of or related to the User’s and/or Expert’s alleged or actual
                use of, misuse of, or failure to use the Platform, including
                without limitation: (a) claims by any third party; and/or (b)
                claims related to academic misconduct; and/or (c) claims related
                to infringement or violation of a copyright, trademark, trade
                secret, or privacy or confidentiality right by written material,
                images, logos or other content uploaded to the Platform through
                User’s or Expert’s Account. INDEMNIFIED CLAIMS INCLUDE, WITHOUT
                LIMITATION, CLAIMS ARISING OUT OF OR RELATED TO PLATFORM
                PROVIDER’S NEGLIGENCE.
              </p>
              <p>
                7.2. The User’s and/or Expert’s obligations set forth in Section
                7.1. include, without limitation: (a) settlement at User’s
                and/or Expert’s expense and payment of judgments finally awarded
                by a court of competent jurisdiction, as well as payment of
                court costs and other reasonable expenses; and (b) reimbursement
                of reasonable attorneys’ fees incurred before User’s and/or
                Expert’s assumption of the defense (but not attorneys’ fees
                incurred thereafter).
              </p>
              <p>
                7.3. If the User and/or Expert fails to assume the defense on
                time to avoid prejudicing the defense, Platform Provider may
                defend the indemnified claim, without loss of rights pursuant to
                this Section. Platform Provider will have the right, not to be
                exercised unreasonably, to reject any settlement or compromise
                that requires that Platform Provider admit wrongdoing or
                liability or subject to any ongoing affirmative obligation.
              </p>
              <p>
                <strong>8. LIMITATION OF LIABILITY</strong>
              </p>
              <p>
                8.1. PLATFORM PROVIDER’S CUMULATIVE LIABILITY FOR ALL CLAIMS
                ARISING OUT OF OR RELATED TO THIS AGREEMENT WILL NOT EXCEED 1000
                GBP.
              </p>
              <p>
                8.2. Excluded Damages. IN NO EVENT WILL PLATFORM PROVIDER BE
                LIABLE FOR LOST PROFITS OR LOSS OF BUSINESS OR FOR ANY
                CONSEQUENTIAL, INDIRECT, SPECIAL, INCIDENTAL, OR PUNITIVE
                DAMAGES ARISING OUT OF OR RELATED TO THIS AGREEMENT.
              </p>
              <p>
                8.3. <strong>Clarifications and Disclaimers</strong>. THE
                LIABILITIES LIMITED BY THIS SECTION APPLY TO THE BENEFIT OF
                PLATFORM PROVIDER’S OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AND
                THIRD PARTY CONTRACTORS, AS WELL AS: (a) TO LIABILITY FOR
                NEGLIGENCE; (b) REGARDLESS OF THE FORM OF ACTION, WHETHER IN
                CONTRACT, TORT, STRICT PRODUCT LIABILITY, OR OTHERWISE; (c) EVEN
                IF PLATFORM PROVIDER IS ADVISED IN ADVANCE OF THE POSSIBILITY OF
                THE DAMAGES IN QUESTION AND EVEN IF SUCH DAMAGES WERE
                FORESEEABLE; AND (d) EVEN IF USER’S OR EXPERT’S REMEDIES FAIL OF
                THEIR ESSENTIAL PURPOSE.
              </p>
              <p>
                8.4. NEITHER THE PLATFORM PROVIDER NOR ITS OFFICERS, DIRECTORS,
                EMPLOYEES, AGENTS, AND THIRD PARTY CONTRACTORS DO NOT LIABLE FOR
                FURTHER USING THE DELIVERABLES OR EXPERT SERVICES BY USERS AS
                THE LATTER INTENDED FOR THE PURPOSES AS DEFINED IN CLAUSES 1.6
                AND 1.12. USING THE DELIVERABLES OR EXPERT SERVICES BY USERS AS
                ACCOMPLISHED FORM FOR FURTHER SUBMITTING TO ANY EDUCATIONAL
                INSTITUTION FOR ANY PURPOSE IS STRONGLY PROHIBITED.
              </p>
              <p>
                <strong>9. MISCELLANEOUS</strong>
              </p>
              <p>
                9.1. <strong>No Waiver</strong>. Neither party will be deemed to
                have waived any of its rights under this Agreement by lapse of
                time or by any statement or representation other than by an
                authorized representative in an explicit written waiver. No
                waiver of a breach of this Agreement will constitute a waiver of
                any other breach of this Agreement.
              </p>
              <p>
                9.2. <strong>Force Majeure</strong>. No delay, failure, or
                default, other than a failure to pay fees when due, will
                constitute a breach of this Agreement to the extent caused by
                acts of war, terrorism, hurricanes, earthquakes, epidemics,
                other acts of God or of nature, strikes or other labor disputes,
                riots or other acts of civil disorder, embargoes, government
                orders responding to any of the foregoing, or other causes
                beyond the performing party’s reasonable control.
              </p>
              <p>
                9.3. <strong>Choice of Law &amp; Jurisdiction</strong>. This
                Agreement and all claims arising out of or related to this
                Agreement will be governed solely by the laws of England and
                Wales, without reference to: (a) any conflicts of law principle
                that would apply the substantive laws of another jurisdiction to
                the parties’ rights or duties; (b) other international laws. The
                parties consent to the personal and exclusive jurisdiction of
                the courts of England and Wales. This Section governs all claims
                arising out of or related to this Agreement, including without
                limitation tort claims.
              </p>
              <p>
                9.4. <strong>Entire Agreement</strong>. This Agreement sets
                forth the entire agreement of the parties and supersedes all
                prior or contemporaneous writings, negotiations, and discussions
                with respect to its subject matter. Neither party has relied
                upon any such prior or contemporaneous communications.
              </p>
              <p>
                9.5. <strong>Amendment</strong>. Platform Provider may amend
                this Agreement from time to time by posting an amended version
                at its Website and sending User or Expert written notice
                thereof. Such an amendment will be deemed accepted and become
                effective (a) 30 days after such notice or (b) in case of the
                User’s or Expert’s new Order start; or (c) depositing funds to
                recharge the Balance using the Platform, whichever is earlier,
                unless the User or Expert first gives the Provider written
                notice of rejection of the amendment. In the event of such
                rejection, this Agreement will continue under its original
                provisions, and the amendment will become effective at the start
                of the User&apos;s or Expert’s new Order.
              </p>
              <p>
                9.6. The User’s or Expert’s continued use of the Platform
                following the effective date of an amendment will confirm User’s
                or Expert’s consent thereto.
              </p>
            </div>

            <div className="h-160"></div>
          </div>
        </div>

        <Footer domain={domain} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      domain: process.env.NEXT_PUBLIC_DOMAIN,
      crmURL: process.env.NEXT_PUBLIC_CRM_URL,
    },
  };
};
