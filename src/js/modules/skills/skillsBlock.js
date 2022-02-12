class SkillsBlock {
	constructor({ skill = null, color, title, img, text, type = skill }) {
		this.skill = skill;
		this.color = color;
		this.title = title;
		this.img = img;
		this.text = text;
		this.type = type;
	}

	mount() {
		const block = document.createElement('div');
		switch (this.type) {
			case 'invisible':
				block.classList.add('invisible');
				break;
			case 'descr':
				block.classList.add('skills__block', 'description');
				block.innerHTML = `
					<h3 class="
						subtitle
						subtitle_fz14
						skills__block-subtitle"
					>
						${this.title}
					</h3>
					<p class="skills__block-text">
						${this.text}
					</p>	
				`;
				break;
			default:
				if (this.skill) block.setAttribute('data-skill', this.skill);
				block.classList.add('skills__block', 'animate__animated');
				block.innerHTML = `
					<img
						class="skills__block-img"
						src=${this.img}
						alt=${this.title}
					/>
					<h3 class="
						subtitle
						subtitle_fz14
						skills__block-subtitle"
					>
						${this.title}
					</h3>
					<p class="skills__block-text">
						${this.text}
					</p>
					${
						this.skill
							? `
							<div class="skills__block-line skills__block-line_1" style="background-color: ${this.color}">
							</div>
							<div class="skills__block-line skills__block-line_2" style="background-color: ${this.color}">
							</div>
							`
							: ''
					}
				`;

				break;
		}

		return block;
	}
}

export default SkillsBlock;
