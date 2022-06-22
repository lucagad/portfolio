(function() {

    const modal = document.querySelector('#portfolioModal');

    function setContent({ target, value }) {
        if (target && value) {
            target.textContent = value;
        }
    }

    if (modal) {
        modal.addEventListener('show.bs.modal', function(event) {
            const parentDiv = event.relatedTarget;
            const modalImg = modal.querySelector('img');
            const modalImgVal = parentDiv.getAttribute('data-portfolio-img');
            const modalTitle = modal.querySelector('.intro h3');
            const modalTitleVal = parentDiv.getAttribute('data-portfolio-title');
            const modalIntro = modal.querySelector('.intro p');
            const modalIntroVal = parentDiv.getAttribute('data-portfolio-description');
            const modalClient = modal.querySelector('.client p.text-muted');
            const modalClientVal = parentDiv.getAttribute('data-portfolio-client');
            const modalCategory = modal.querySelector('.category p.text-muted');
            const modalCategoryVal = parentDiv.getAttribute('data-portfolio-category');

            const modalDemo = modal.getElementsByClassName('btn-demo');
            const modalDemoVal = parentDiv.getAttribute('data-portfolio-demo');
            const modalRepo = modal.getElementsByClassName('btn-repository');
            const modalRepoVal = parentDiv.getAttribute('data-portfolio-repository');

            if (modalImg && modalImgVal) {
                modalImg.setAttribute('src', modalImgVal);
            }

            modalDemo[0].setAttribute("href", modalDemoVal);
            modalRepo[0].setAttribute("href", modalRepoVal);

            setContent({ target: modalTitle, value: modalTitleVal });
            setContent({ target: modalIntro, value: modalIntroVal });
            setContent({ target: modalClient, value: modalClientVal });
            setContent({ target: modalCategory, value: modalCategoryVal });
            
        });
    }
})();

