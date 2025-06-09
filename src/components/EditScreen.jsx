import Draggable from "./Draggable";
import BiomePane from "./BiomePane";
import SubBiomePane from "./SubBiomePane";
import WorldPane from "./WorldPane";

function EditScreen() {

    return (
        <>
            <Draggable x={ 0.1 * window.innerWidth} y={ 0.6 * window.innerHeight } dragBoxClassName="window-header">
                <WorldPane name="World Config"/>
            </Draggable>

            <Draggable x={ 0.3 * window.innerWidth } y={ 0.6 * window.innerHeight } dragBoxClassName="window-header">
                <BiomePane name="rainvalley"/>
            </Draggable>

            <Draggable x={ 0.5 * window.innerWidth } y={ 0.6 * window.innerHeight } dragBoxClassName="window-header">
                <SubBiomePane name="rainvalley.clusters"/>
            </Draggable>
        </>
    );

}

export default EditScreen;
