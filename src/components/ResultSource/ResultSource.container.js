import ResultSource from "./ResultSource";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  sources: state.addResponseToStore.responses,
});

export default connect(mapStateToProps)(ResultSource);
