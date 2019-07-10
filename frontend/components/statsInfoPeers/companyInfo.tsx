import React, { FunctionComponent } from 'react';
import { CompanyInfoState } from '../../utilities/interfaces';

interface CompanyInfoProps {
  companyInfo: CompanyInfoState;
}

const CompanyInfo: FunctionComponent<CompanyInfoProps> = ({ companyInfo }) => {
  const { description, website, symbol, companyName } = companyInfo;
  const urlFormatter = (url: string) =>
    url == null ? null : url.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <div className="section-info">
      <h2 className="heading-section">Company Overview</h2>
      <h2>
        {companyName} {symbol ? `(${symbol})` : ''}
      </h2>
      <a href={website} className="section-info__link">
        {urlFormatter(website)}
      </a>
      <p>{description}</p>
    </div>
  );
};

export default CompanyInfo;
