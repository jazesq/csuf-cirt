class CampusPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <ion-header>
          <ion-toolbar>
            <ion-title><center>CIRT</center></ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content padding>
          <p>
            Welcome to the Campus Issue Reporting Tool for California State
            University, Fullerton!
          </p>

          <p>
            If you identify a non-emergency issue on campus that requires attention, this tool can assist you in filing a report.
            Your report will then be forwarded to the appropriate department.
          </p>
          
          <p>
            <em>If this is an emergency, please call <a href="tel:911">911</a>.</em>
          </p>

          <h2>Select the campus</h2>
          <ion-list>
            <ion-radio-group ionChange="">
              <ion-item>
                <ion-label>Fullerton</ion-label>
                <ion-nav-push component="page-departments">
                <ion-radio slot="end" color="success" value="fullerton"></ion-radio>
              </ion-item>

              <ion-item>
                <ion-label>Irvine</ion-label>
                <ion-nav-push component="page-departments">
                <ion-radio slot="end" color="success" value="irvine"></ion-radio>
              </ion-item>
            </ion-radio-group>
          </ion-list>

        </ion-content>
    `;
  }
}

customElements.define("page-campus", CampusPage);
