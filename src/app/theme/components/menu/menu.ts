import { Menu } from './menu.model';

export const verticalMenuItems = [
    new Menu (1, { es: 'Panel Asistencia', en: 'Asistence Panel' }, '/principal/dashboard', null, 'tachometer', null, false, 0),
    new Menu (1, { es: 'Panel Otro', en: 'Other Panel' }, '/other/dashboard', null, 'tachometer', null, false, 0),
    new Menu(1, { es: 'Panel Usuarios', en: 'Users Panel'}, '/user/dashboard', null, 'tachometer', null ,  false, 0)

]

export const horizontalMenuItems = [
    new Menu (1, { es: 'Panel Asistencia', en: 'Asistence Panel' }, '/principal/dashboard', null, 'tachometer', null, false, 0),
    new Menu (1, { es: 'Panel Otro', en: 'Other Panel' }, '/other/dashboard', null, 'tachometer', null, false, 0),
    new Menu (1, { es: 'Panel Usuarios', en: 'Users Panel'}, '/user/dashboard', null, 'tachometer', null , false, 0)
]
