import { connect } from 'react-redux';
import { incrementAction, decrementAction } from '../../actions';
import Counter from '../../../components/Counter';

const mapStateToProps = state => {
    return {
        count: state.counter.count
    }
}

// const mapDispatchToProps = () => {
//     return 
// }


export default connect(mapStateToProps, { incrementAction, decrementAction })(Counter); //hocs