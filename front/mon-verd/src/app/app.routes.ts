import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

// Importa los componentes asociados a cada ruta
// import { HomeComponent } from './home/home.component';
// import { ServiciosComponent } from './servicios/servicios.component';
// import { ContactoComponent } from './contacto/contacto.component';

// Define las rutas de la aplicación
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // Puedes agregar más rutas según sea necesario
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige a /home por defecto
  { path: '**', redirectTo: '/home' }, // Redirige a /home si la ruta no es reconocida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
