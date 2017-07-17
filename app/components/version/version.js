'use strict';

angular.module('bonobo_island.version', [
  'bonobo_island.version.interpolate-filter',
  'bonobo_island.version.version-directive'
])

.value('version', '0.1');
