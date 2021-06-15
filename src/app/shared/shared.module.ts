import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { SpinnerComponent } from './components/spinner/spinner.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { SearchFieldComponent } from './components/search-field/search-field.component'
import { RouterModule } from '@angular/router';
import { BackgroundGlassComponent } from './components/background-glass/background-glass.component';
import { AuthShortcutsComponent } from './components/shortcuts/auth-shortcuts/auth-shortcuts.component';
import { MediaShortcutsComponent } from './components/shortcuts/media-shortcuts/media-shortcuts.component';
import { LanguageShortcutsComponent } from './components/shortcuts/language-shortcuts/language-shortcuts.component'
import { FormsModule } from '@angular/forms';
import { CardMovieBasicComponent } from './components/cards/card-movie-basic/card-movie-basic.component';
import { SpinnerInblockComponent } from './components/spinner-inblock/spinner-inblock.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TrunkTextPipe } from './pipes/trunkList.pipe'

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SpinnerComponent,
  NavbarComponent,
  SearchFieldComponent,
  BackgroundGlassComponent,
  AuthShortcutsComponent, 
  MediaShortcutsComponent, 
  LanguageShortcutsComponent,
  CardMovieBasicComponent, 
  SpinnerInblockComponent,

  TrunkTextPipe
]
@NgModule({
  declarations: [...COMPONENTS,  ],
  exports: [...COMPONENTS],
  imports: [CommonModule, RouterModule, FormsModule ],
})
export class SharedModule {}
