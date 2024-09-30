import { GetStaticProps } from "next";
import Head from "next/head";
import "@/styles/old/normalize.css";
import "@/styles/old/components.css";
import "@/styles/old/p-42.css";
import Footer from "@/components/old/footer";
import Header from "@/components/old/header";
import { BasicPageProps } from "@/utils/props";

export default function PrivacyPolicy({ domain, crmURL }: BasicPageProps) {
  return (
    <>
      <Head>
        <title>PRIVACY POLICY</title>
        <meta name="description" content="PRIVACY POLICY" />

        <meta charSet="utf-8" />
        <link href={`https://${domain}/privacy-policy`} rel="canonical" />
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
              <h1>PRIVACY POLICY</h1>
              <p>
                This Privacy Policy is the part of the Terms and Conditions, and
                describes the main aspects of the User’s and Expert’s personal
                data processing under the EU General Data Processing Regulation.
              </p>
              <p>
                <strong>1. DEFINITIONS</strong>
              </p>
              <p>
                1.1. The terms used herein are defined as in the Terms and
                Conditions.
              </p>
              <p>
                1.2. All other terms used herein are defined under the EU
                General Data Processing Regulation (EU GDPR).&nbsp;
              </p>
              <p>
                <strong>2. CONTROLLER</strong>
              </p>
              <p>
                2.1. The controller is the entity which determines the purposes
                and means of the processing of User’s and Expert’s personal
                data.
              </p>
              <p>
                2.2. The controller of the User’s and Expert’s personal data is
                legal entity Cthrsis OÜ, company number: 16428415, registered
                office address: Tallinn, Kesklinna linnaosa, Vesivarava tn
                50-201, 10152, Estonia.
              </p>
              <p>
                <strong>3. PURPOSES AND BASIS OF THE PROCESSING</strong>
              </p>
              <p>
                3.1. Personal data is any information relating to an identified
                or identifiable user, in particular by reference to an
                identifier such as a name, an identification number, location
                data, an online identifier etc.
              </p>
              <p>
                3.2. <strong>Personal data processed</strong>. We collect and
                process User’s information such as first and last name, e-mail
                address, telephone number, contact address (including country
                and/or state), banking details, ID numbers or other similar data
                to proof your identity and metadata (e.g. order information,
                date, time when you contacted Platform Provider, IP-address,
                cookies (including analytical and marketing)).
              </p>
              <p>
                3.3. We collect and process Expert’s information such as first
                and last name, e-mail addresses, telephone number, contact
                address (including country and/or state), banking details
                (including Payoneer ID), education information, CV, personal
                picture ID numbers or other similar data to proof your identity
                and metadata (e.g. order information, date, time when you
                contacted Platform Provider, IP-address, cookies (including
                analytical and marketing)).
              </p>
              <p>
                3.4. Platform Provider may process any other personal data that
                is provided voluntarily by the User or Expert. The User or
                Expert is not obliged to provide personal data by law or under
                any agreement, however, Platform Provider SaaS and Escrow
                services might not be available or might be impossible to be
                rendered without some types of personal data.
              </p>
              <p>
                3.5. <strong>Purposes of the processing</strong>. The personal
                data received are processed for the purposes of:
              </p>
              <p>
                a) provision of Platform Provider’s SaaS and Escrow services;
              </p>
              <p>
                b) User and Expert registration, execution of Orders via
                Platform;
              </p>
              <p>c) User’s and Expert’s support;</p>
              <p>
                d) researching the behavior and use of the Platform by the User
                and Expert, saving and adjusting the information on the Platform
                according to your preferences, studying the effectiveness of the
                Platform.
              </p>
              <p>
                3.6. <strong>Legal basis for the processing</strong>. The legal
                basis for the processing is:
              </p>
              <p>
                a) performance of a contract to which the User or Expert is a
                party or in order to take steps at the request of the User or
                Expert prior to entering into a contract;
              </p>
              <p>
                b) legitimate interests to improve Platform Provider Website,
                make the Website usable by enabling basic functions;
              </p>
              <p>
                c) User’s or Expert’s consent to the processing for purposes of
                collecting statistics, storing preferences, tracking
                visitors&apos; use of the Platform and displaying relevant
                advertisements.
              </p>
              <p>
                3.7. <strong>Retention period</strong>. Platform Provider
                retains and processes User’s and Expert’s personal data as long
                as it is necessary to fulfill the purposes defined and the basis
                of the processing activity exists plus three years, if longer
                term is not stipulated by the law, or until a request to delete
                the personal data is received. We will also retain and use your
                data for as long as necessary to resolve disputes and/or enforce
                our rights and agreements.
              </p>
              <p>
                3.8. <strong>Child privacy</strong>. We neither solicit nor
                collect personal data from anyone under the age of 16 (sixteen)
                or under the legal age of your country if it is different. If
                you are below 16 (sixteen) or you are not of legal age in your
                country, do not provide us with any personal data.
              </p>
              <p>
                <strong>4. PROCESSING OF PERSONAL DATA</strong>
              </p>
              <p>
                4.1. Your personal data is collected, when you consciously
                provide it to the Platform Provider (e.g. when completing an
                online form) or we collect it by observation (e.g. using
                automated data capturing software). We do not collect personal
                data from publicly accessible sources.
              </p>
              <p>
                4.2. Platform Provider is processing User’s or Expert’s personal
                data by automated means. The personal data is kept in electronic
                form on the Platform, on computers, access to which only
                authorized Platform Provider employees and contractors has.
              </p>
              <p>
                4.3. <strong>Automated decision-making</strong>. Your personal
                data is not subject for automated decision-making, including
                profiling. However, third-party cookies are used for analyses of
                your interests (advertisement preferences).&nbsp;
              </p>
              <p>
                <strong>5. PERSONAL DATA TRANSFER</strong>
              </p>
              <p>
                5.1. <strong>Recipients</strong>. Your personal data may be
                transferred to such categories of processors (subprocessors):
              </p>
              <p>
                a) our contractors and subcontractors (marketing manager, IT
                specialist, customer support manager etc.), those operating
                within the jurisdiction outside the European Economic Area,
                particularly in Ukraine;
              </p>
              <p>b) hosting providers;</p>
              <p>
                c) third parties that perform our User’s or Expert’s traffic
                analysis, for example, Google Analytics. Data collected by
                Google Analytics may be transferred outside the EEA for
                processing;
              </p>
              <p>
                d) banking services intermediaries, such as Payoneer and/or
                Stripe;
              </p>
              <p>e) purchaser during M&amp;A process.</p>
              <p>
                5.2. Those subprocessors perform tasks on our behalf and are
                contractually obliged not to disclose or use collected
                information for any other purposes, other than specified in this
                Privacy Policy, and may store and assist in the facilitation of
                technical aspects of our SaaS or Escrow services or performance
                of functions related to the administration of SaaS or Escrow
                services (collection and analysis) or other indicated under
                contractual closes. Subprocessors remain fully liable for their
                acts and omissions and all obligations subcontracted to
                them.&nbsp;
              </p>
              <p>
                5.3. <strong>International transfer</strong>. In case, where
                your personal data is transferred outside the EEA, Platform
                Provider enforces the appropriate legal documents that ensure
                the safeguard of personal data, particularly, the Standard
                Contractual Clauses.
              </p>
              <p>
                <strong>6. USER AND EXPERT RIGHTS</strong>
              </p>
              <p>6.1. User or Expert has the right:</p>
              <p>
                a) to access. You are entitled to see the personal data held
                about you. You have the right to request a copy of the personal
                data that we hold about you.&nbsp;
              </p>
              <p>
                b) to rectification. If your personal data is inaccurate, you
                have the right to have the data changed. We encourage you to
                contact us to let us know if any of your personal data is not
                accurate or changes, so that we can keep your personal data
                up-to-date.
              </p>
              <p>
                c) to objection. In certain circumstances, you also have the
                right to object to processing of your personal data and to ask
                us to block, erase and restrict your personal data.
              </p>
              <p>
                d) to data portability. You have the right to request that some
                of your personal data is provided to you, or to another data
                controller, in a commonly used, machine-readable format.
              </p>
              <p>
                e) to erasure. You have the right to ask or require us to erase
                your personal data when the personal data is no longer necessary
                for the purposes for which it was collected, or when, among
                other things, your personal data have been unlawfully processed.
              </p>
              <p>
                f) to restriction. You can limit the way we use your data. This
                is an alternative to requesting the erasure of your data.
              </p>
              <p>
                g) to withdraw consent. When we rely on your consent for the
                processing of your personal data (particularly, when cookies are
                processed), you have the right to withdraw your consent at any
                time (e.g. by deleting or blocking cookies). However, the
                withdrawal of your consent will not affect the lawfulness of the
                Platform Provider processing based on consent acting prior to
                the withdrawal.
              </p>
              <p>
                h) to file complaints. If you believe that your data protection
                rights may have been breached, you have the right to lodge a
                complaint with the applicable supervisory authority, or to seek
                a remedy through the courts.
              </p>
              <p>
                6.2. You may, at any time, exercise any of the above rights, by
                contacting support@{domain} together with a proof of your
                identity.
              </p>
              <p>
                <strong>7. INCIDENTS NOTIFICATION</strong>
              </p>
              <p>
                7.1. If the Platform Provider becomes aware of any breach of our
                security leading to the accidental or unlawful destruction,
                loss, alteration or unauthorized disclosure of, or access to
                (excluding unsuccessful attempts or activities) personal data of
                User or Expert on systems managed or otherwise controlled by us,
                we will notify you promptly and without undue delay and in
                compliance to the procedure prescribed under respective the EU
                GDPR and applicable laws.
              </p>
              <p>
                7.2. The notification will be made to your email address. It is
                the sole responsibility of the User or Expert to provide us with
                the email address and ensure that this email address is valid
                and current.
              </p>
              <p>
                7.3. None of the data incidents notification from the Platform
                Provider may not be and will not be construed as an
                acknowledgment of any fault or liability with respect to data
                incidents by us.
              </p>
              <p>
                <strong>8. OTHER PROVISIONS</strong>
              </p>
              <p>
                8.1. This Privacy Policy may be updated in the future to comply
                with national and international laws regulating the protection
                of personal data. In the event of significant changes to the
                provisions, Platform Provider will send an email about such
                changes before they take effect.
              </p>
              <p>
                8.2. If you require any additional information or have any
                further questions concerning this Privacy Policy, please contact
                us at&nbsp; support@{domain}.
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
