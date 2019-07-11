import React, { FunctionComponent } from 'react';
import {
  CompanyInfoState,
  FetchStatusElement,
} from '../../utilities/interfaces';

interface CompanyInfoProps {
  companyInfo: CompanyInfoState;
  fetchingStatus: FetchStatusElement;
}

const CompanyInfo: FunctionComponent<CompanyInfoProps> = ({
  companyInfo,
  fetchingStatus,
}) => {
  const { description, website, symbol, companyName } = companyInfo;
  const urlFormatter = (url: string) =>
    url == null ? null : url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <div className="section-info">
      {fetchingStatus.startFetching && (
        <div>
          <h2 className="heading-section">Company Overview</h2>
          {!fetchingStatus.doneFetching ? (
            'LOADING...'
          ) : (
            <div>
              <h2>
                {companyName} {symbol ? `(${symbol})` : ''}
              </h2>
              <a href={website} className="section-info__link">
                {urlFormatter(website)}
              </a>
              <p>{description}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CompanyInfo;
