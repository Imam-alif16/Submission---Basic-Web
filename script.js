const toggleMenu = document.querySelector('header nav .togglemenu input');
const navigation = document.querySelector('header nav ul');

toggleMenu.addEventListener('click', function() {
    navigation.classList.toggle('slide');
});