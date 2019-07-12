import React, { FunctionComponent } from 'react';
import {
  CompanyInfoState,
  FetchStatusElement,
} from '../../utilities/interfaces';
import AdaptiveLoader from '../adaptiveLoader/adaptiveLoader';

interface CompanyInfoProps {
  companyInfo: CompanyInfoState;
  fetchStatus: FetchStatusElement;
}

const CompanyInfo: FunctionComponent<CompanyInfoProps> = ({
  companyInfo,
  fetchStatus,
}) => {
  const { description, website, symbol, companyName } = companyInfo;
  const urlFormatter = (url: string | null) =>
    url == null ? null : url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <div className="section-info">
      {fetchStatus.startFetching && (
        <div>
          <h2 className="heading-section">Company Overview</h2>
          {!fetchStatus.doneFetching ? (
            <AdaptiveLoader />
          ) : !fetchStatus.fetchSuccess ? (
            'ERROR'
          ) : (
            <div>
              <h2>
                {companyName} {symbol ? `(${symbol})` : ''}
              </h2>
              <a
                href={website ? website : undefined}
                className="section-info__link"
              >
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
