class SkillsContainer {
	constructor({ skill = null, children = [] }) {
		this.skill = skill;
		this.children = children;
	}

	mount() {
		const container = document.createElement('div');
		container.setAttribute('data-skills', this.skill);
		container.classList.add('skills__blocks', 'animate__animated');
		return container;
	}
}

export default SkillsContainer;
