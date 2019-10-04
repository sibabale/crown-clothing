import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';


import CollectionPreview from './CollectionPreview';
import './collections-overview.styles.scss'

import { selectCollectionsForPreview } from '../../redux/selectors/ShopSelectors'

const CollectionsOverview = ({ collections }) => (

  <div className="collections-overview">
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview
          key={ id }
          { ...otherCollectionProps }
        />
      ))
    }
  </div>

);

const mapStateToProps = createStructuredSelector(
  {
    collections: selectCollectionsForPreview
  }
);

export default connect(mapStateToProps)(CollectionsOverview);
