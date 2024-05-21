function renderCargaisonPage(){
  return ` <div class="mx-2 w-[100%] flex lg:flex-nowrap md:flex-nowrap sm:flex-wrap sm2:flex-wrap py-6 sm:px-6 lg:px-8 gap-x-5">
            <div class="flex-auto lg:w-[25%] md:w-[35%] sm:w-[100%] h-[700px] border-amber-950 bg-white p-8 rounded-lg shadow-lg">
                <form class="w-[100%]" id="AddCargaisonForm">
                    <!-- Libelle -->
                    <div class="content content">
                        <label for="libelle" class="block text-sm font-medium text-gray-700">Libelle</label>
                        <input type="text" id="libelle" class="form-control mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span class="error-message">error</span>
                    </div>

                    <!-- Type -->
                    <div class="content">
                        <label for="type" class="block text-sm font-medium text-gray-700">Type</label>
                        <select id="type" class="form-control mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="">Sélectionner un type</option>
                            <option value="1">Routiere</option>
                            <option value="2">Maritime</option>
                            <option value="3">Aerienne</option>
                        </select>
                        <span class="error-message">error</span>
                    </div>

                    <!-- Date de départ -->
                    <div class="content">
                        <label for="date-depart" class="block text-sm font-medium text-gray-700">Date de départ</label>
                        <input type="date" id="date-depart" class="form-control mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span class="error-message">error</span>
                    </div>

                    <!-- Date d'arrivée -->
                    <div class="content">
                        <label for="date-arrivee" class="block text-sm font-medium text-gray-700">Date d'arrivée</label>
                        <input type="date" id="date-arrivee" class="form-control mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span class="error-message">error</span>
                    </div>

                    <div class="content">
                        <label for="distance" class="block text-sm font-medium text-gray-700">Distance</label>
                        <input type="text" id="distance" class="form-control mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span class="error-message">error</span>
                    </div>
                    <!-- Image -->
                    <div class="content">
                        <label for="image" class="block text-sm font-medium text-gray-700">Image</label>
                        <input type="text" id="image" class="form-control image-cargaison-input mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span class="error-message">error</span>
                    </div>
                    <div class="w-[50px] h-[50px] mb-2">
                      <img src="https://placehold.co/50" id="image-cargaison" alt="" srcset="">
                    </div>
                    <!-- Button -->
                    <div class="text-center">
                        <button class="w-full px-4 py-2 bg-gray-800 text-white font-medium rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Enregistrer</button>
                    </div>
                </form>
            </div>
            <div class="flex-auto flex-wrap sm:w-[100%] md:w-[65%] flex gap-x-6 gap-y-6 lg:w-[65%] border-amber-950 ">
                <div class="flex w-full justify-end items-center space-x-4">
                    <div class="relative">
                        <input type="text" placeholder="Search..." class="border border-gray-300 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring focus:border-blue-500">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <i class="fa fa-search h-5 w-5 text-gray-400"></i>
                        </div>
                    </div>
                    <select class="border w-[20%] border-gray-300 rounded-md px-4 py-2 appearance-none focus:outline-none focus:ring focus:border-blue-500">
                        <option value="" selected disabled>Type de cargaison</option>
                        <option value="1">Routiere</option>
                        <option value="2">Maritime</option>
                        <option value="3">Aerienne</option>
                    </select>
                </div>
                <div id="listeCargaisonContent" class="flex flex-wrap sm:w-[100%] md:w-[100%] flex gap-x-6 gap-y-6 lg:w-[100%] ">
                
                </div>
            </div>
        </div>`;
}

function  renderProduitsPage(){
  return `<div class="flex flex-col gap-y-6 items-center w-[100%] py-5 px-5">
            <div class="flex flex-wrap w-[100%] max-w-6xl bg-white py-5 px-5">
                <h2 class="text-2xl w-[100%]">Ajouter un produit</h2>
                <form class="w-[100%] flex flex-wrap gap-x-6">
                    <!-- Libelle -->
                    <div class="w-[30%]">
                        <label for="libelle" class="block text-sm font-medium text-gray-700">Nom Produits</label>
                        <input type="text" id="libelle" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span class="text-red-600 text-[0.8rem]">Error</span>
                    </div>

                    <!-- Type -->
                    <div class="w-[30%]">
                        <label for="type" class="block text-sm font-medium text-gray-700">Type</label>
                        <select id="type" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required>
                            <option value="">Sélectionner un type</option>
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                            <option value="type3">Type 3</option>
                        </select>
                        <span class="text-red-600 text-[0.8rem]">Error</span>
                    </div>
                    <!-- Libelle -->
                    <div class="w-[30%]">
                        <label for="poids" class="block text-sm font-medium text-gray-700">Le poids</label>
                        <input type="text" id="poids" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span class="text-red-600 text-[0.8rem]">Error</span>
                    </div>
                    <!-- Image -->
                    <div class="w-[30%]">
                        <span for="" class="block invisible text-sm font-medium text-gray-700">label-invisible</span>

                        <label for="image" class="custom-file-label bg-gray-800 hover:bg-gray-700 text-white font-semibold inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>
                            Upload Image
                        </label>
                        <input type="file" id="image" class="custom-file-input" accept="image/*">
                    </div>
                    <!-- Libelle -->
                    <div class="w-[30%] invisible">
                        <label for="" class="block text-sm font-medium text-gray-700">Toxicité</label>
                        <input type="text" id="" class="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <span class="text-red-600 text-[0.8rem]">Error</span>
                    </div>
                    <!-- Button -->
                    <div class="text-center  w-[100%] flex justify-start">
                        <button type="submit" class="w-[10%] px-4 py-2 bg-gray-800 text-white font-medium rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Enregistrer</button>
                    </div>
                </form>
            </div>

            <div class="w-[100%] max-w-6xl bg-white rounded-lg shadow-md">
                <!-- Header -->
                <div class="p-4 border-b border-gray-200">
                    <h2 class="text-2xl font-semibold text-gray-700">Product List</h2>
                    <div class="flex w-full pt-7 pb-3 items-center space-x-4">
                        <div class="relative">
                            <input type="text" placeholder="Search..." class="border border-gray-300 rounded-md px-4 py-2 pl-10 focus:outline-none focus:ring focus:border-blue-500">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                                <i class="fa fa-search h-5 w-5 text-gray-400"></i>
                            </div>
                        </div>
                        <select class="border w-[18%] border-gray-300 rounded-md px-4 py-2 appearance-none focus:outline-none focus:ring focus:border-blue-500">
                            <option value="" selected disabled>Type de Produits</option>
                            <option value="type1">Type 1</option>
                            <option value="type2">Type 2</option>
                            <option value="type3">Type 3</option>
                        </select>
                    </div>
                </div>

                <!-- Table -->
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white">
                        <thead class="bg-gray-100 border-b">
                        <tr>
                            <th class="w-24 px-4 py-2 text-left text-gray-600 font-semibold">Image</th>
                            <th class="px-4 py-2 text-left text-gray-600 font-semibold">Libellé</th>
                            <th class="px-4 py-2 text-left text-gray-600 font-semibold">Poids</th>
                            <th class="px-4 py-2 text-left text-gray-600 font-semibold">Status</th>
                            <th class="px-4 py-2 text-left text-gray-600 font-semibold">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <!-- Example Row 1 -->
                        <tr class="border-b">
                            <td class="w-24 px-4 py-2">
                                <img src="https://via.placeholder.com/50" alt="Product Image" class="rounded">
                            </td>
                            <td class="px-4 py-2">Product A</td>
                            <td class="px-4 py-2">
                                <span class="inline-block bg-blue-200 text-blue-800 text-sm px-2 rounded-full">2kg</span>
                            </td>
                            <td class="px-4 py-2">
                                <span class="inline-block bg-green-200 text-green-800 text-sm px-2 rounded-full">Available</span>
                            </td>
                            <td class="px-4 py-2">
                                <button class="bg-gray-800 font-semibold text-white py-1 px-2 border border-transparent rounded">
                                    Modifier
                                </button>
                                <button class="bg-red-800 font-semibold text-white py-1 px-2 border border-transparent rounded">
                                    supprimer
                                </button>
                                <button class="bg-emerald-800 font-semibold text-white py-1 px-2 border border-transparent rounded">
                                    Affecter
                                </button>
                            </td>
                        </tr>
                        <!-- Example Row 2 -->
                        <tr class="border-b">
                            <td class="w-24 px-4 py-2">
                                <img src="https://via.placeholder.com/50" alt="Product Image" class="rounded">
                            </td>
                            <td class="px-4 py-2">Product B</td>
                            <td class="px-4 py-2">
                                <span class="inline-block bg-blue-200 text-blue-800 text-sm px-2 rounded-full">1.5kg</span>
                            </td>
                            <td class="px-4 py-2">
                                <span class="inline-block bg-red-200 text-red-800 text-sm px-2 rounded-full">Out of Stock</span>
                            </td>
                            <td class="px-4 py-2">
                                <button class="bg-gray-800 font-semibold text-white py-1 px-2 border border-transparent rounded">
                                    Modifier
                                </button>
                                <button class="bg-red-800 font-semibold text-white py-1 px-2 border border-transparent rounded">
                                    supprimer
                                </button>
                                <button class="bg-emerald-800 font-semibold text-white py-1 px-2 border border-transparent rounded">
                                    Affecter
                                </button>
                            </td>
                        </tr>
                        <!-- Example Row 3 -->
                        <tr class="border-b">
                            <td class="w-24 px-4 py-2">
                                <img src="https://via.placeholder.com/50" alt="Product Image" class="rounded">
                            </td>
                            <td class="px-4 py-2">Product C</td>
                            <td class="px-4 py-2">
                                <span class="inline-block bg-blue-200 text-blue-800 text-sm px-2 rounded-full">3kg</span>
                            </td>
                            <td class="px-4 py-2">
                                <span class="inline-block bg-yellow-200 text-yellow-800 text-sm px-2 rounded-full">Limited</span>
                            </td>
                            <td class="px-4 py-2">
                                <button class="bg-gray-800 font-semibold text-white py-1 px-2 border border-transparent rounded">
                                    Modifier
                                </button>
                                <button class="bg-red-800 font-semibold text-white py-1 px-2 border border-transparent rounded">
                                    supprimer
                                </button>
                                <button class="bg-emerald-800 font-semibold text-white py-1 px-2 border border-transparent rounded">
                                    Affecter
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Footer (Pagination) -->
                <div class="p-4 border-t border-gray-200 flex justify-between items-center">
                    <span class="text-sm text-gray-600">Showing 1 to 10 of 50 entries</span>
                    <div class="flex space-x-1">
                        <button class="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Previous</button>
                        <button class="px-3 py-1 bg-gray-800 text-white rounded hover:bg-blue-600">1</button>
                        <button class="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">2</button>
                        <button class="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">3</button>
                        <button class="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Next</button>
                    </div>
                </div>
            </div>

        </div>`;
}

function renderDetailsCargaisonPage() {
  return `<div class="flex flex-col gap-y-6 items-center w-[100%] py-5 px-5">
            <div class="w-full max-w-6xl  bg-white rounded-lg shadow-lg overflow-hidden">
                <div class="flex flex-col md:flex-row">
                    <!-- Image Section -->
                    <div class="md:w-1/3 p-4">
                        <img src="https://via.placeholder.com/400" alt="Product Image" class="rounded-lg w-full object-cover">
                    </div>

                    <!-- Details Section -->
                    <div class="md:w-2/3 p-4">
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Product Title</h3>
                        <p class="text-gray-600 mb-4">This is a detailed description of the product. It includes all the necessary information about the product, its features, and any other relevant details that the customer might want to know.</p>

                        <!-- Badges Section -->
                        <div class="flex flex-wrap mb-4">
                            <span class="inline-block bg-blue-200 text-blue-800 text-sm px-2 py-1 rounded-full mr-2 mb-2">2kg</span>
                            <span class="inline-block bg-green-200 text-green-800 text-sm px-2 py-1 rounded-full mr-2 mb-2">Available</span>
                            <span class="inline-block bg-yellow-200 text-yellow-800 text-sm px-2 py-1 rounded-full mb-2">Limited</span>
                        </div>

                        <!-- Dates Section -->
                        <div class="flex mb-4">
                            <div class="mr-4">
                                <p class="text-gray-600">Start Date:</p>
                                <p class="text-gray-800 font-semibold">01/01/2024</p>
                            </div>
                            <div>
                                <p class="text-gray-600">End Date:</p>
                                <p class="text-gray-800 font-semibold">01/06/2024</p>
                            </div>
                        </div>

                        <!-- Action Button -->
                        <button class="w-[30%] bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300">Modifier la cargaison</button>
                    </div>
                </div>
            </div>
            <div class="w-[100%] max-w-6xl bg-white rounded-lg shadow-md">
                <!-- Header -->
                <div class="p-4 border-b border-gray-200">
                    <h2 class="text-2xl font-semibold text-gray-700">Les Produits de la cargaison</h2>
                </div>

                <!-- Table -->
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white">
                        <thead class="bg-gray-100 border-b">
                        <tr>
                            <th class="w-24 px-4 py-2 text-left text-gray-600 font-semibold">Image</th>
                            <th class="px-4 py-2 text-left text-gray-600 font-semibold">Libellé</th>
                            <th class="px-4 py-2 text-left text-gray-600 font-semibold">Poids</th>
                            <th class="px-4 py-2 text-left text-gray-600 font-semibold">Status</th>
                            <th class="px-4 py-2 text-left text-gray-600 font-semibold">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <!-- Example Row 1 -->
                        <tr class="border-b">
                            <td class="w-24 px-4 py-2">
                                <img src="https://via.placeholder.com/50" alt="Product Image" class="rounded">
                            </td>
                            <td class="px-4 py-2">Product A</td>
                            <td class="px-4 py-2">
                                <span class="inline-block bg-blue-200 text-blue-800 text-sm px-2 rounded-full">2kg</span>
                            </td>
                            <td class="px-4 py-2">
                                <span class="inline-block bg-green-200 text-green-800 text-sm px-2 rounded-full">Available</span>
                            </td>
                            <td class="px-4 py-2">
                                <button class="bg-red-800 font-semibold text-white py-1 px-2 border border-transparent rounded">
                                    supprimer
                                </button>
                            </td>
                        </tr>
                        <!-- Example Row 2 -->
                        <tr class="border-b">
                            <td class="w-24 px-4 py-2">
                                <img src="https://via.placeholder.com/50" alt="Product Image" class="rounded">
                            </td>
                            <td class="px-4 py-2">Product B</td>
                            <td class="px-4 py-2">
                                <span class="inline-block bg-blue-200 text-blue-800 text-sm px-2 rounded-full">1.5kg</span>
                            </td>
                            <td class="px-4 py-2">
                                <span class="inline-block bg-red-200 text-red-800 text-sm px-2 rounded-full">Out of Stock</span>
                            </td>
                            <td class="px-4 py-2">
                                <button class="bg-red-800 font-semibold text-white py-1 px-2 border border-transparent rounded">
                                    supprimer
                                </button>
                            </td>
                        </tr>
                        <!-- Example Row 3 -->
                        <tr class="border-b">
                            <td class="w-24 px-4 py-2">
                                <img src="https://via.placeholder.com/50" alt="Product Image" class="rounded">
                            </td>
                            <td class="px-4 py-2">Product C</td>
                            <td class="px-4 py-2">
                                <span class="inline-block bg-blue-200 text-blue-800 text-sm px-2 rounded-full">3kg</span>
                            </td>
                            <td class="px-4 py-2">
                                <span class="inline-block bg-yellow-200 text-yellow-800 text-sm px-2 rounded-full">Limited</span>
                            </td>
                            <td class="px-4 py-2">
                                <button class="bg-red-800 font-semibold text-white py-1 px-2 border border-transparent rounded">
                                    supprimer
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Footer (Pagination) -->
                <div class="p-4 border-t border-gray-200 flex justify-between items-center">
                    <span class="text-sm text-gray-600">Showing 1 to 10 of 50 entries</span>
                    <div class="flex space-x-1">
                        <button class="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Previous</button>
                        <button class="px-3 py-1 bg-gray-800 text-white rounded hover:bg-blue-600">1</button>
                        <button class="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">2</button>
                        <button class="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">3</button>
                        <button class="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">Next</button>
                    </div>
                </div>
            </div>
        </div>`;
}

export {renderProduitsPage, renderCargaisonPage, renderDetailsCargaisonPage};