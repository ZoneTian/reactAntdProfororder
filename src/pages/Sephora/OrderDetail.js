import React , { Component , Suspense } from 'react';
// import { connect } from 'dva';

import PageLoading from '@/components/PageLoading'
import OrderTable from '@/components/OrderDetail'

class OrderDetail extends Component {
  state = {

  };

  render(){
    return (
      <div>
        <Suspense fallback={<PageLoading />}>
          {/* <IntroduceRow loading={loading} visitData={visitData} /> */}
          <OrderTable {...this.props} />
        </Suspense>  
      </div>
      )
  }
}
export default OrderDetail;