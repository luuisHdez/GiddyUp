import React from 'react';
import Header from './Body/Header';
import MainContent from './Body/MainContent';
import GoalsSection from './Body/GoalsSection';
import FeedbackSection from './Body/FeedbackSection';
import ProjectPlanning from './Body/ProjectPlanning';
import CombinedSupportCard from './Body/CombinedSupportCard';
import CombinedContactSection from './Body/CombinedContactSection';
import CombinedFooter from './Body/CombinedFooter';

function GiddyUpApp() {
  return (
    <div>
      <div className="flex  flex-col items-center px-20 pt-10 mb-4 w-full max-w-[2028px] min-h-[1010px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2aae6b7b24cfce92ff03cfe6f5a51e78ae8c99bb684510e5d77b1a488b9cf33f?apiKey=c1946530cef5422ab7dda9568063bfde&&apiKey=c1946530cef5422ab7dda9568063bfde" alt="" className="object-cover absolute inset-0 size-full" />
      <Header />
      <MainContent />
      <GoalsSection />
      <FeedbackSection />
      <ProjectPlanning />
      <CombinedSupportCard />
      <CombinedContactSection />
    </div>
      <CombinedFooter />
    </div>
    
    
  );
}

export default GiddyUpApp;