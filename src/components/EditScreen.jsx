import Draggable from "./Draggable";
import Window from "./Window";

function EditScreen() {

    return (
        <>
            <Draggable x={ 0.1 * window.innerWidth} y={ 0.6 * window.innerHeight } dragBoxClassName="window-header">
                <Window type="world" name="World Config"/>
            </Draggable>

            <Draggable x={ 0.3 * window.innerWidth } y={ 0.6 * window.innerHeight } dragBoxClassName="window-header">
                <Window type="biome" name="rainvalley"/>
            </Draggable>

            <Draggable x={ 0.5 * window.innerWidth } y={ 0.6 * window.innerHeight } dragBoxClassName="window-header">
                <Window type="sub-biome" name="rainvalley.clusters"/>
            </Draggable>
        </>
    );

}

export default EditScreen;
