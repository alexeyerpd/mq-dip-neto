const burgerBtn = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationList = document.querySelector('.navigation__list');

const dict = {
    navigation: 'navigation--open',
    burger: 'burger--close',
    navigationList: 'navigation__list--open',
}

burgerBtn.addEventListener('click', () => {
    if (navigation.classList.contains(dict.navigation)) {
        navigation.classList.remove(dict.navigation);
        burgerBtn.classList.remove(dict.burger)
        navigationList.classList.remove(dict.navigationList)
    } else {
        navigation.classList.add(dict.navigation);
        burgerBtn.classList.add(dict.burger)
        navigationList.classList.add(dict.navigationList)
    }
});
