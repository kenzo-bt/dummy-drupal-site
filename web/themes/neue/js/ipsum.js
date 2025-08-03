(function (Drupal, once) {
  Drupal.behaviors.ipsum = {
    attach(context) {
      const elements = once('ipsum', 'p', context);
      // `elements` is always an Array.
      elements.forEach((element) => {
        element.innerHTML = element.innerHTML.replaceAll('ipsum', 'EEPSUM');
      });
    }
  };
}(Drupal, once));
