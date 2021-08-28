import Header from "./Header";
import { connect } from "react-redux";
import { searchByName } from "../../store/actionCreators/search";

const mapStateToProps = (state) => ({
  load: state.load,
});
const mapDispatchToProps = (dispatch) => ({
  searchByName: (name, type) => dispatch(searchByName(name, type)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
