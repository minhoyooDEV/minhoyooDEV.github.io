import React from 'react';

import styles from './SkillCardList.module.scss';

type SkillCardList = {
	children: React.ReactNode;
};
const SkillCardList = ({ children }: SkillCardList) => {
	return <ul className={styles.SkillCardList}>{children}</ul>;
};

export default SkillCardList;
