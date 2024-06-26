// Tabs.js

import React, { useState } from "react";
import styles from "./Tabs.module.scss";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}
const   GenricTabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList}>
        {tabs.map((tab: any, index: any) => (
          <div
            key={index}
            className={`${styles.tab} ${
              index === activeTab ? styles.active : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>{tabs[activeTab].content}</div>
    </div>
  );
};

export default GenricTabs;
