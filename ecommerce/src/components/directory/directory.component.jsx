import { ReactComponent } from '*.svg';
import React from 'react';

// Ici, on utilise une class component et non pas une functional component car on doit placer dans le store la state value des éléments du menu avec lequels on souhaite créer le menu => D'ou l'intérêt d'utiliser le "extends React.Component."

class Directory extends React.Component {
    constructor() {
        super();
// Ici, on fixe l'état initial du state du menu

        this.state = {
            // On considère chaque élément du menu comme étant une section
            sections :
            

        }

    }


}