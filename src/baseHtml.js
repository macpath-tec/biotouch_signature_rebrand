

export const setHtml = (firstName, lastName, email, phone, fax, job) => {
    
    const html = `
<table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 iasblw" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
<tbody>
  <tr>
    <td style="vertical-align: middle;">
      <table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 iasblw" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
        <tbody>
          <tr>
            <td>
              <h2 color="#3d2b56" class="name__NameContainer-sc-1m457h3-0 jCjfGD" style="margin: 0px; font-size: 13px; color: rgb(61, 43, 86); font-weight: 600;">
                <span>${firstName} ${lastName}</span>
              </h2>
              <p color="#3d2b56" font-size="medium" class="job-title__Container-sc-1hmtp73-0 ibpiyI" style="margin: 0px; color: rgb(61, 43, 86); font-size: 12px; line-height: 22px;">
                <span>${job}</span>
              </p>
              <p color="#3d2b56" font-size="medium" class="job-title__Container-sc-1hmtp73-0 ibpiyI" style="margin: 8px; color: rgb(61, 43, 86); font-size: 11px; line-height: 22px;">
                <img src="https://4009785.fs1.hubspotusercontent-na1.net/hubfs/4009785/Email%20Signature%20Graphics/biotouch_logo_1000px.png" width="190px" class="image__StyledImage-sc-hupvqm-0 eLouvR" style="display: block; max-width: 190px;">
              </p>
            </td>
            <td width="15">
              <div></div>
            </td>
            <td color="#7cc244" direction="vertical" width="1" height="auto" class="color-divider__Divider-sc-1h38qjv-0 dVPycS" style="width: 1px; border-bottom: none; border-left: 1px solid #00b5be;"></td>
            <td width="15">
              <div></div>
            </td>
            <td>
              <table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 iasblw" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                <tbody>
                  <tr height="25" style="vertical-align: middle;">
                    <td width="30" style="vertical-align: middle;">
                      <table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 iasblw" style="vertical-align: -webkit-baseline-middle; font-size: 10.5pt; font-family: Arial;">
                        <tbody>
                          <tr>
                            <td style="vertical-align: bottom;">
                              <span color="#00b5be" width="13" class="contact-info__IconWrapper-sc-mmkjr6-1 eOlNoC" style="display: inline-block;background-color: #7cc244;">
                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" color="#7cc244" alt="mobilePhone" width="13" class="contact-info__ContactLabelIcon-sc-mmkjr6-0 glcxte" style="display: block;">
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td style="padding: 0px; color: #3d2b56;">
                      <a href="tel:${phone}" color="#3d2b56"  class="contact-info__ExternalLink-sc-mmkjr6-2 dwaWtg" style="text-decoration: none; color: #3d2b56; font-size: 12px;">
                        <span style="color:#3d2b56">
                          <b>Cell: </b>${phone} </span>
                      </a>
                      <a href="tel:${fax}" color="#3d2b56"  class="contact-info__ExternalLink-sc-mmkjr6-2 dwaWtg" style="text-decoration: none; color: #3d2b56; font-size: 12px;">
                        <span style="color:#3d2b56">
                          <br>
                          <b>Fax:</b> ${fax} </span>
                      </a>
                    </td>
                  </tr>
                  <tr height="25" style="vertical-align: middle;">
                    <td width="30" style="vertical-align: middle;">
                      <table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 iasblw" style="vertical-align: -webkit-baseline-middle; font-size: 10.5pt; font-family: Arial;">
                        <tbody>
                          <tr>
                            <td style="vertical-align: bottom;">
                              <span color="#7cc244" width="13" class="contact-info__IconWrapper-sc-mmkjr6-1 eOlNoC" style="display: inline-block; background-color: #7cc244;">
                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color="#7cc244" alt="emailAddress" width="13" class="contact-info__ContactLabelIcon-sc-mmkjr6-0 glcxte" style="display: block;">
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td style="padding: 0px;">
                      <a href="mailto:${email}" color="#3d2b56" class="contact-info__ExternalLink-sc-mmkjr6-2 dwaWtg" style="text-decoration: none; color: rgb(61, 43, 86); font-size: 12px;">${email}</a>
                    </td>
                  </tr>
                  <tr height="25" style="vertical-align: middle;">
                    <td width="30" style="vertical-align: middle;">
                      <table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 iasblw" style="vertical-align: -webkit-baseline-middle; font-size: 10.5pt; font-family: Arial;">
                        <tbody>
                          <tr>
                            <td style="vertical-align: bottom;">
                              <span color="#00b5be" width="13" class="contact-info__IconWrapper-sc-mmkjr6-1 eOlNoC" style="display: inline-block; background-color: #7cc244;">
                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="#07cc244" alt="website" width="13" class="contact-info__ContactLabelIcon-sc-mmkjr6-0 glcxte" style="display: block;">
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td style="padding: 0px;">
                      <a href="https://biotouchglobal.com" color="#3d2b56" class="contact-info__ExternalLink-sc-mmkjr6-2 dwaWtg" style="text-decoration: none; color: rgb(61, 43, 86); font-size: 12px;">biotouchglobal.com</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
  <tr>
    <td height="20"></td>
  </tr>
  <tr>
    <td color="#3d2b56" direction="horizontal" width="auto" height="1" class="color-divider__Divider-sc-1h38qjv-0 dVPycS" style="width: 100%; border-bottom: 1px solid #00b5be; border-left: none; display: block;"></td>
  </tr>
  <tr>
    <td>
      <table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 iasblw" style="width: 100%; vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;padding-top: 10px" ;>
        <tbody>
          <tr>
            <td style="vertical-align: top;">
              <role="presentation" width="200px" class="image__StyledImage-sc-hupvqm-0 eLouvR" style="display: block; max-width: 200px;">
            </td>
            <td style="text-align: left; vertical-align: middle;">
              <p style="color:#3d2b56;font-size:12px;font-style:italic;">ISO 13485:2016 Certified</p>
            </td>
            <td style="text-align: right; vertical-align: middle;">
              <table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 iasblw" style="display: inline-block; vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                <tr style="text-align: right;">
                  <td>
                    <a href="https://www.linkedin.com/company/biotouch-global" target="_blank" color="#00b5be" class="social-links__LinkAnchor-sc-py8uhj-2 kyynGZ" style="display: inline-block; padding: 0px;">
                      <img src="https://4009785.fs1.hubspotusercontent-na1.net/hubfs/4009785/Marketing/linkedin.png" alt="linkedin" color="#7cc244" height="24" class="social-links__LinkImage-sc-py8uhj-1 cKHJaU" style="max-width: 135px; display: block;">
                    </a>
                  </td>
                  <td width="5">
                    <div></div>
                  </td>
                  <td>
                    <a href="https://www.instagram.com/biotouchglobal/" target="_blank" class="social-links__LinkAnchor-sc-py8uhj-2 kyynGZ" style="display: inline-block; padding: 0px;">
                      <img src="https://4009785.fs1.hubspotusercontent-na1.net/hubfs/4009785/Marketing/insta.png" alt="instagram" color="#7cc244" height="24" class="social-links__LinkImage-sc-py8uhj-1 cKHJaU" style="max-width: 135px; display: block;">
                    </a>
                  </td>
                  <td width="5">
                    <div></div>
                  </td>
                  <td>
                    <a href="https://www.facebook.com/BioTouchGlobal/" target="_blank" class="social-links__LinkAnchor-sc-py8uhj-2 kyynGZ" style="display: inline-block; padding: 0px;">
                      <img src="https://4009785.fs1.hubspotusercontent-na1.net/hubfs/4009785/Marketing/fb.png" alt="facebook" color="#7cc244" height="24" class="social-links__LinkImage-sc-py8uhj-1 cKHJaU" style="max-width: 135px; display: block;">
                    </a>
                  </td>
                  <td width="5">
                    <div></div>
                  </td>
                  <td>
                    <a href="https://www.youtube.com/@biotouchglobal" target="_blank" class="social-links__LinkAnchor-sc-py8uhj-2 kyynGZ" style="display: inline-block; padding: 0px;">
                      <img src="https://4009785.fs1.hubspotusercontent-na1.net/hubfs/4009785/Marketing/yt.png" alt="twitter" color="#7cc244" height="24" class="social-links__LinkImage-sc-py8uhj-1 cKHJaU" style="max-width: 135px; display: block;">
                    </a>
                  </td>
                  <td width="5">
                    <div></div>
                  </td>
                  <td>
                    <a href="https://twitter.com/BioTouchGlobal" target="_blank" class="social-links__LinkAnchor-sc-py8uhj-2 kyynGZ" style="display: inline-block; padding: 0px;">
                      <img src="https://4009785.fs1.hubspotusercontent-na1.net/hubfs/4009785/Marketing/twitter.png" alt="twitter" color="#7cc244" height="24" class="social-links__LinkImage-sc-py8uhj-1 cKHJaU" style="max-width: 135px; display: block;">
                    </a>
                  </td>
                  <td width="5">
                    <div></div>
                  </td>
                  <td width="5">
                    <div></div>
                  </td>
                </tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
</table>
`;
    return html;
}