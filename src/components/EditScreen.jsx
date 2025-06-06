import Draggable from "./Draggable";
import BiomeWindow from "./BiomeWindow";
import SubBiomeWindow from "./SubBiomeWindow";
import WorldWindow from "./WorldWindow";

function EditScreen() {

    return (
        <>
            <Draggable x={ 0.1 * window.innerWidth} y={ 0.6 * window.innerHeight } dragBoxClassName="window-header">
                <WorldWindow name="World Config"/>
            </Draggable>

            <Draggable x={ 0.3 * window.innerWidth } y={ 0.6 * window.innerHeight } dragBoxClassName="window-header">
                <BiomeWindow name="rainvalley"/>;
            </Draggable>

            <Draggable x={ 0.5 * window.innerWidth } y={ 0.6 * window.innerHeight } dragBoxClassName="window-header">
                <SubBiomeWindow name="rainvalley.clusters"/>;
            </Draggable>
        </>
    );

}

export default EditScreen;
