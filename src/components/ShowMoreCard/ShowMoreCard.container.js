import { cardShown } from "../../store/actionCreators/showMore";
import ShowMoreCard from "./ShowMoreCard";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  cardShown: (index) => dispatch(cardShown(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreCard);
