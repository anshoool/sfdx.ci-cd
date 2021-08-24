import { LightningElement, track, api } from "lwc";
import TC_AR177_TermsOfService_Footer from "@salesforce/label/c.TC_AR177_TermsOfService_Footer";
import TC_AR177_PrivacyLink_Footer from "@salesforce/label/c.TC_AR177_PrivacyLink_Footer";
import TC_AR177_ResponsibleLink_Footer from "@salesforce/label/c.TC_AR177_ResponsibleLink_Footer";
import TC_AR177_TrustLink_Footer from "@salesforce/label/c.TC_AR177_TrustLink_Footer";
import TC_AR177_ContactLink_Footer from "@salesforce/label/c.TC_AR177_ContactLink_Footer";
import TC_AR177_BottomText_Footer from "@salesforce/label/c.TC_AR177_BottomText_Footer";
import TC_AR177_DescriptionIcon_Footer from "@salesforce/label/c.TC_AR177_DescriptionIcon_Footer";
import TC_AR177_Support_Footer from "@salesforce/label/c.TC_AR177_Support_Footer";
import TC_AR177_SupportNo_Footer from "@salesforce/label/c.TC_AR177_SupportNo_Footer";

export default class Tc_AdmfFooter extends LightningElement {
  label = {
    TC_AR177_TermsOfService_Footer,
    TC_AR177_PrivacyLink_Footer,
    TC_AR177_ResponsibleLink_Footer,
    TC_AR177_TrustLink_Footer,
    TC_AR177_ContactLink_Footer,
    TC_AR177_BottomText_Footer,
    TC_AR177_DescriptionIcon_Footer,
    TC_AR177_Support_Footer,
    TC_AR177_SupportNo_Footer
  };

  @track attributes = {
    componentName05: "tc_AdminifiedGettingStartedCmp",
    isVisible: true,
    navigateFoot: "GS"
  };

  @api
  get step() {
    return this.attributes.navigateFoot;
  }
  set step(value) {
    this.attributes.navigateFoot = value;
  }

  get showFooterCmp() {
    if (
      this.attributes.navigateFoot === "GS" ||
      this.attributes.navigateFoot === "Dashboard"
    ) {
      return true;
    }
    return false;
  }
}