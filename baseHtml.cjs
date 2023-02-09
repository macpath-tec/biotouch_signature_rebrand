const createHtml = (firstName, lastName, email, phone, fax, job) => {
    const html = `<table cellpadding="0" cellspacing="0" class="table__StyledTable-sc-1avdl6r-0 iasblw" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
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
                    <img src="data:image/png;base64,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" width="190px" class="image__StyledImage-sc-hupvqm-0 eLouvR" style="display: block; max-width: 190px;">
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
  </table>`;

  return html;
}

module.exports = createHtml;