import Draggable from "./Draggable";
import BiomePane from "./BiomePane";
import SubBiomePane from "./SubBiomePane";
import WorldPane from "./WorldPane";

function EditScreen(props) {

    let renderPane = (pane, index) => {
        switch (pane.type) {
            case "world":
                return (
                    <Draggable key={ index} x={ 0.1 * window.innerWidth } y={ 0.6 * window.innerHeight } dragBoxClassName="window-header">
                        <WorldPane name={ pane.name }/>
                    </Draggable>
                );
            case "biome":
                return (
                    <Draggable key={ index } x={ 0.3 * window.innerWidth } y={ 0.6 * window.innerHeight } dragBoxClassName="window-header">
                        <BiomePane name={ pane.name }/>
                    </Draggable>
                );
            case "sub-biome":
                return (
                    <Draggable key={ index } x={ 0.5 * window.innerWidth } y={ 0.6 * window.innerHeight } dragBoxClassName="window-header">
                        <SubBiomePane name={ pane.name }/>
                    </Draggable>
                );
        }
    };

    return (
        <>
            { props.panes.filter((pane) => pane.visible).map((pane, index) => renderPane(pane, index)) }
        </>
    );

}

export default EditScreen;
