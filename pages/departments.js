class DepartmentsPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <ion-header>
          <ion-toolbar>
            <ion-title><center>CIRT</center></ion-title>
          </ion-toolbar>
      </ion-header>

      <ion-content padding>

        <h2>Select the department</h2>
        
        <ion-grid>
          <ion-row>
            <ion-col size="6">
              <div>
                <ion-card>
                  <ion-nav-push component="page-campussafety-safetyissues">
                  <ion-card-header>
                    <center>
                      <ion-icon
                        src="https://cdn.glitch.com/c6fa28bb-32b6-4c20-9bd9-80eecf8bdc55%2Fcampus-safety.svg?v=1572915001905"
                        size="large"
                      ></ion-icon>
                      <ion-card-title>Campus Safety</ion-card-title>
                    </center>
                    </ion-card-header>
                </ion-card>
              </div>
            </ion-col>
            <ion-col size="6">
              <div>
                <ion-card>
                  <ion-nav-push component="page-clf-clfissues">
                  <ion-card-header>
                    <center>
                      <ion-icon
                        src="https://cdn.glitch.com/c6fa28bb-32b6-4c20-9bd9-80eecf8bdc55%2Fcustodial.svg?v=1573083345791"
                        size="large"
                      ></ion-icon>
                      <ion-card-title>
                        Custodial, Landscaping, & Facilities
                      </ion-card-title>
                    </center>
                  </ion-card-header>
                </ion-card>
              </div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="6">
              <div>
                <ion-card>
                  <ion-card-header> 
                    <center>
                      <ion-icon
                        src="https://cdn.glitch.com/c6fa28bb-32b6-4c20-9bd9-80eecf8bdc55%2Fhazardous-waste.svg?v=1573083428445"
                        size="large"
                      ></ion-icon>
                      <ion-card-title>
                        Hazardous Waste & Lab Safety
                      </ion-card-title>
                    </center> 
                  </ion-card-header>
                </ion-card>
              </div>
            </ion-col>
            <ion-col size="6">
              <div>
                <ion-card>
                  <ion-card-header>
                    <center>
                      <ion-icon
                        src="https://cdn.glitch.com/c6fa28bb-32b6-4c20-9bd9-80eecf8bdc55%2Finfo-tech.svg?v=1573083497432"
                        size="large"
                      ></ion-icon>
                      <ion-card-title>Information Technology</ion-card-title>
                    </center>
                  </ion-card-header>
                </ion-card>
              </div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="6">
              <div>
                <ion-card>
                  <ion-card-header>
                    <center>
                      <ion-icon
                        src="https://cdn.glitch.com/c6fa28bb-32b6-4c20-9bd9-80eecf8bdc55%2Fparking-transportation.svg?v=1573083561256"
                        size="large"
                      ></ion-icon>
                      <ion-card-title>Parking & Transportation</ion-card-title>
                    </center>
                  </ion-card-header>
                </ion-card>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-footer>
          <ion-toolbar>     
            <ion-buttons slot="start">
              <ion-back-button default-href="campus"></ion-back-button>
             </ion-buttons>
          </ion-toolbar>
        </ion-footer>

      </ion-content>
    `;
  }
}

customElements.define("page-departments", DepartmentsPage);
