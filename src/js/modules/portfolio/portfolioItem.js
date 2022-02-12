class PortfolioItem {
	constructor({
		container,
		title,
		repo,
		promoImg,
		previewImg,
		description,
		columns = 1,
		rows = 1,
	}) {
		this.container = container;
		this.title = title;
		this.repo = repo;
		this.promoImg = promoImg;
		this.previewImg = previewImg;
		this.description = description;
		this.rows = rows;
		this.columns = columns;
	}

	mount() {
		this.container.innerHTML += `
			<a 
				href=${this.repo}
				class="
					portfolio__item
					${this.columns ? 'portfolio__item_c' + this.columns : null}
					${this.rows ? 'portfolio__item_r' + this.rows : null}
				"
			>
				<img
					src=${this.promoImg}
					alt=${this.title}
					class="portfolio__item-promoImg"
				/>
				<img
					src=${this.previewImg}
					alt=${this.title}
					class="portfolio__item-previewImg animate__animated animate__fadeIn"
				/>
			</a>
		`;
		// <div class="portfolio__item-description">
		// 	${this.description}
		// </div>
		// <button class="btn btn_hollow">preview</button>
	}
}

export { PortfolioItem };
