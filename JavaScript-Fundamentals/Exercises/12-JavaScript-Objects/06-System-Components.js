/**
 * Created by Deyan Peychev on 10-Jun-17.
 */
function systemComponents(input) { //array of strings
    let systemComponents = new Map();
    for (let line of input) {
        [systemName, componentName, subcomponentName] = line.split(' | ');
        if(!systemComponents.has(systemName)){
            systemComponents.set(systemName, new Map());
            let currentComponent = systemComponents.get(systemName);
            if(!currentComponent.has(componentName)){
                currentComponent.set(componentName, new Set());
                let currentSubComponent = currentComponent.get(componentName);
                if(!currentSubComponent.has(subcomponentName)){
                    currentSubComponent.add(subcomponentName);
                }
            }else{
                let currentSubComponent = currentComponent.get(componentName);
                if(!currentSubComponent.has(subcomponentName)){
                    currentSubComponent.add(subcomponentName);
                }
            }
        }else{
            let currentComponent = systemComponents.get(systemName);
            if(!currentComponent.has(componentName)){
                currentComponent.set(componentName, new Set());
                let currentSubComponent = currentComponent.get(componentName);
                if(!currentSubComponent.has(subcomponentName)){
                    currentSubComponent.add(subcomponentName);
                }
            }else{
                let currentSubComponent = currentComponent.get(componentName);
                if(!currentSubComponent.has(subcomponentName)){
                    currentSubComponent.add(subcomponentName);
                }
            }
        }
    }

    function firstSort(a,b) {
        // console.log([...a[1].entries()].length + ' ' + [...b[1].entries()].length);
        if([...a[1].entries()].length < [...b[1].entries()].length){
            return 1;
        }else if ([...a[1].entries()].length > [...b[1].entries()].length){
            return -1;
        }else if (a[0] > b[0]){
            return 1;
        }else if(a[0] < b[0]){
            return -1;
        }else{
            return 0;
        }
    }

    function secondSort(a,b) {
        if([...a[1].entries()].length < [...b[1].entries()].length){
            return 1;
        }else if ([...a[1].entries()].length > [...b[1].entries()].length){
            return -1;
        }
    }

    for (let [system, components] of [...systemComponents.entries()].sort(firstSort)) {
         console.log(system);
        for (let [componentName, subcomponents] of [...components.entries()].sort(secondSort)) {
             console.log(`|||${componentName}`);
            // console.log([...components].length);
            // console.log([...subcomponents.entries()].length);
            for (let subcomponent of subcomponents) {
                console.log(`||||||${subcomponent}`);
            }
        }
    }
}
systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'SULS | Judge Site | Another Page',
    'SULS | Judge Site | Page Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security',
]);