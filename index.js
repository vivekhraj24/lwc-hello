import { buildCustomElementConstructor, register } from 'lwc';
import { registerWireService } from '@lwc/wire-service';
import UiApp from 'force-app/main/default/lwc/helloWorld';

registerWireService(register);

customElements.define('ui-app', buildCustomElementConstructor(UiApp));