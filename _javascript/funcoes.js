        var quebrada = 0
        var Mivet, Invet, Anvet, Ancvet, Nuvet, Ovet, Vert = false
		function Vetomi(tipo){
			var adicionar = document.getElementById("Mirage");
			if (tipo == 1){
				arquivo = "_imagens/mirage2.jpg";
			}
			if (tipo == 2){
				arquivo = "_imagens/mirage.jpg";	
			}
			if (tipo == 3){
				arquivo = "_imagens/mirage3.jpg";
			}
			if(!Mivet){
			    if (quebrada<=5){
				    document.getElementById("Mirage").src = arquivo;
				    if (tipo== 3){
					    quebrada = quebrada+1;
                        Mivet = true;
						adicionar.classList.remove("mapasvet");
						document.getElementById("mira").style.visibility = "hidden";
				    }
			    }
            }
			if(quebrada == 6){
				if(!Mivet){
					function adicionarSeletor(){						
						document. getElementById('Mirage'). src ='_imagens/mirage4.jpg'
						adicionar.classList.remove("mapasvet");							
						adicionar.classList.add("foto05");
						document.getElementById("mira").style.visibility = "hidden";
					}
					adicionarSeletor()
				}
			}
		}
		function Vetoin(tipo){
			var adicionar = document.getElementById("Inferno");
			if (tipo == 1){
				arquivo = "_imagens/inferno2.jpg";
			}
			if (tipo == 2){
				arquivo = "_imagens/inferno.jpg";	
			}
			if (tipo == 3){
				arquivo = "_imagens/inferno3.jpg";
			}
			if (quebrada<=5){
                if(!Invet){
				    document.getElementById("Inferno").src = arquivo;
				    if (tipo== 3){
					    quebrada = quebrada+1;
                        Invet = true;
						adicionar.classList.remove("mapasvet");
						document.getElementById("inf").style.visibility = "hidden";
				    }
                }
			}
			if(quebrada == 6){
				if(!Invet){
					function adicionarSeletor(){						
						document. getElementById('Inferno'). src ='_imagens/inferno4.jpg'
						adicionar.classList.remove("mapasvet");							
						adicionar.classList.add("foto05");
						document.getElementById("inf").style.visibility = "hidden";
					}
					adicionarSeletor()
				}
			}
		}
		function Vetoanu(tipo){
			var adicionar = document.getElementById("Anubis");
			if (tipo == 1){
				arquivo = "_imagens/anubis2.jpg";
			}
			if (tipo == 2){
				arquivo = "_imagens/anubis.jpg";	
			}
			if (tipo == 3){
				arquivo = "_imagens/anubis3.jpg";
			}
			if(!Anvet){
			    if (quebrada<=5){
				    document.getElementById("Anubis").src = arquivo;
				    if (tipo== 3){
					    quebrada = quebrada+1;
                        Anvet = true;
						adicionar.classList.remove("mapasvet");
						document.getElementById("anu").style.visibility = "hidden";
				    }
			    }
            }
			if(quebrada == 6){
				if(!Anvet){
					function adicionarSeletor(){						
						document. getElementById('Anubis'). src ='_imagens/anubis4.jpg'
						adicionar.classList.remove("mapasvet");							
						adicionar.classList.add("foto05");
						document.getElementById("anu").style.visibility = "hidden";
					}
					adicionarSeletor()
				}
			}
		}
		function Vetoanc(tipo){
			var adicionar = document.getElementById("Ancient");
			if (tipo == 1){
				arquivo = "_imagens/ancient2.jpg";
			}
			if (tipo == 2){
				arquivo = "_imagens/ancient.jpg";	
			}
			if (tipo == 3){
				arquivo = "_imagens/ancient3.jpg";
			}
			if(!Ancvet){
			    if (quebrada<=5){
				    document.getElementById("Ancient").src = arquivo;
				    if (tipo== 3){
					    quebrada = quebrada+1;
                        Ancvet = true;
						adicionar.classList.remove("mapasvet");	
						document.getElementById("anc").style.visibility = "hidden";
				    }
			    }
            }
			if(quebrada == 6){
				if(!Ancvet){
					function adicionarSeletor(){
						document. getElementById('Ancient'). src ='_imagens/ancient4.jpg'	
						adicionar.classList.remove("mapasvet");											
						adicionar.classList.add("foto05");
						document.getElementById("anc").style.visibility = "hidden";
					}
					adicionarSeletor()
				}
			}	
		}
		function Vetonu(tipo){
			var adicionar = document.getElementById("Nuke");
			if (tipo == 1){
				arquivo = "_imagens/Nuke2.jpg";
			}
			if (tipo == 2){
				arquivo = "_imagens/Nuke.jpg";	
			}
			if (tipo == 3){
				arquivo = "_imagens/Nuke3.jpg";
			}
			if(!Nuvet){
			    if (quebrada<=5){
				    document.getElementById("Nuke").src = arquivo;
				    if (tipo== 3){
					    quebrada = quebrada+1;
                        Nuvet = true;
						adicionar.classList.remove("mapasvet");
						document.getElementById("nuk").style.visibility = "hidden";
				    }
			    }
            }
			if(quebrada == 6){
				if(!Nuvet){
					function adicionarSeletor(){
						document. getElementById('Nuke'). src ='_imagens/Nuke4.jpg';	
						adicionar.classList.remove("mapasvet");						
						adicionar.classList.add("foto05");
						document.getElementById("nuk").style.visibility = "hidden";
					}
					adicionarSeletor()
				}
			}	
		}
		function Vetoov(tipo){
			var adicionar = document.getElementById("Overpass");
			if (tipo == 1){
				arquivo = "_imagens/Overpass2.jpg";
			}
			if (tipo == 2){
				arquivo = "_imagens/Overpass.jpg";	
			}
			if (tipo == 3){
				arquivo = "_imagens/Overpass3.jpg";
			}
            if(!Ovet){
			    if (quebrada<=5){
				    document.getElementById("Overpass").src = arquivo;
				    if (tipo== 3){
					    quebrada = quebrada+1;
                        Ovet = true;
						adicionar.classList.remove("mapasvet");
						document.getElementById("ove").style.visibility = "hidden";
				    }
			    }
            }
			if(quebrada == 6){
				if(!Ovet){
					function adicionarSeletor(){
						document. getElementById('Overpass'). src ='_imagens/overpass4.jpg';
						adicionar.classList.remove("mapasvet");
						adicionar.classList.add("foto06");
						document.getElementById("ove").style.visibility = "hidden";
					}
					adicionarSeletor()
				}
			}	
		}
		function Vetove(tipo){
			var adicionar = document.getElementById("Vertigo");
			if (tipo == 1){
				arquivo = "_imagens/Vertigo2.jpg";
			}
			if (tipo == 2){
				arquivo = "_imagens/Vertigo.jpg";	
			}
			if (tipo == 3){
				arquivo = "_imagens/Vertigo3.jpg";
			}
            if(!Vert){
			    if (quebrada<=5){
				    document.getElementById("Vertigo").src = arquivo;
				    if (tipo== 3){
					    quebrada = quebrada+1;
                        Vert = true;
						adicionar.classList.remove("mapasvet");
						document.getElementById("ver").style.visibility = "hidden";
				    }
			    }
				if(quebrada == 6){
					if(!Vert){
						function adicionarSeletor(){
							document. getElementById('Vertigo'). src ='_imagens/vertigo4.jpg';
							adicionar.classList.remove("mapasvet");
							adicionar.classList.add("foto07");
							document.getElementById("ver").style.visibility = "hidden";
						}
						adicionarSeletor()
					}
				}	
            }
		}