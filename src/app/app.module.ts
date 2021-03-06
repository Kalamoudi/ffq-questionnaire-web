import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestIdInputComponent } from './pages/quest-id-input-page/quest-id-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatCardModule, MatFormFieldModule,
  MatInputModule, MatDialogModule, MatListModule, MatSelectModule,
  MatOptionModule, MatRadioModule, MatIconModule } from '@angular/material';
import { QuestionnairePageComponent } from './pages/questionnaire-page/questionnaire-page.component';
import { ErrorDialogPopupComponent } from './components/error-dialog-popup/error-dialog-popup.component';
import { TextCardComponent } from './components/text-card/text-card.component';
import { QuestionBlockComponent } from './components/question-block/question-block.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ResultsPageComponent } from './pages/results-page/results-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FooditemComponent } from './pages/fooditem/fooditem.component';
import{ ReactiveFormsModule} from '@angular/forms';
import { AdminHeaderComponent } from './pages/admin-header/admin-header.component';
import { QuestResultsComponent } from './pages/quest-results/quest-results.component';
import { RecommendComponent } from './pages/recommend/recommend.component';
import {PopupComponent} from "./components/popup/popup.component";
import { FlashMessagesModule } from 'angular2-flash-messages';
import { Routes, RouterModule } from '@angular/router';
import { RecommendModalComponent } from './components/recommend-modal/recommend-modal.component';
import { FoodRecommendModalComponent } from './components/food-recommend-modal/food-recommend-modal.component';




@NgModule({
  declarations: [
    AppComponent,
    QuestIdInputComponent,
    QuestionnairePageComponent,
    ErrorDialogPopupComponent,
    TextCardComponent,
    QuestionBlockComponent,
    ResultsPageComponent,
    AdminPageComponent,
    FooditemComponent,
    AdminHeaderComponent,
    QuestResultsComponent,
    RecommendComponent,
    PopupComponent,
    RecommendModalComponent,
    FoodRecommendModalComponent
  
    
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatListModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    FlashMessagesModule.forRoot(),
   ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ErrorDialogPopupComponent, ResultsPageComponent,PopupComponent,RecommendModalComponent,FoodRecommendModalComponent]
})
export class AppModule { }
