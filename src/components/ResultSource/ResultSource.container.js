import ResultSource from "./ResultSource";
import { connect } from "react-redux";
import {addResponse, searchSupplierByID} from '../../store/actionCreators/search'

const mapStateToProps = (state) => ({
  sources: state.addResponseToStore.responses,
});
const mapDispatchToProps = (dispatch) => ({
  addToStore: (data)=>dispatch(addResponse(data)),
  searchSupplierByID:(id)=>dispatch(searchSupplierByID(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(ResultSource);
