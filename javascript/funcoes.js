		var quebrada = 0
        var Mivet, Invet, Anvet, Ancvet, Nuvet, Ovet, Vert = false
		function playSoundveto() {
			var audio = new Audio('audio/awp_02.mp3');
			audio.volume = 0.1; // define o volume como 10%
			audio.play();
		  }

		function playSoundgo() {
			var audio = new Audio('audio/csgo-gogogo.mp3');
			audio.volume = 0.1; // define o volume como 50%
			audio.play();
		}  
		function randomizarFotos() {
			var fotos = [
			  'imagens/logoct.png',
			  'imagens/logotr.png'
			];
			
			var index = Math.random() < 0.5 ? 0 : 1;
			
			document.getElementById('CT').style.display = index == 0 ? 'block' : 'none';
			document.getElementById('TR').style.display = index == 1 ? 'block' : 'none';
			
			document.getElementById('CT').src = fotos[0];
			document.getElementById('TR').src = fotos[1];
			
			window.randomizarFotos = function() {
				var index = Math.random() < 0.5 ? 0 : 1;
		  
				document.getElementById('CT').style.display = index == 0 ? 'block' : 'none';
				document.getElementById('TR').style.display = index == 1 ? 'block' : 'none';
		  
				document.getElementById('CT').src = fotos[0];
				document.getElementById('TR').src = fotos[1];
		  
				window.randomizarFotos = null;
			  };
		  }
		function Vetomi(tipo){
			var adicionar = document.getElementById("Mirage");
			if (tipo == 1){
				arquivo = "imagens/mirage2.jpg";
			}
			if (tipo == 2){
				arquivo = "imagens/mirage.jpg";	
			}
			if (tipo == 3){
				arquivo = "imagens/mirage3.jpg";
			}
			if(!Mivet){
			    if (quebrada<=5){
				    document.getElementById("Mirage").src = arquivo;
				    if (tipo== 3){
					    quebrada = quebrada+1;
                        Mivet = true;
						adicionar.classList.remove("mapasvet");
						document.getElementById("mira").style.visibility = "hidden";
						playSoundveto()
				    }
			    }
            }
			if(quebrada == 6){
				if(!Mivet){
					function adicionarSeletor(){						
						document. getElementById('Mirage'). src ='imagens/mirage4.jpg'
						adicionar.classList.remove("mapasvet");							
						adicionar.classList.add("foto05");
						document.getElementById("mira").style.visibility = "hidden";
					}
					adicionarSeletor()
					randomizarFotos()
					playSoundgo()
				}
			}
		}
		function Vetoin(tipo){
			var adicionar = document.getElementById("Inferno");
			if (tipo == 1){
				arquivo = "imagens/inferno2.jpg";
			}
			if (tipo == 2){
				arquivo = "imagens/inferno.jpg";	
			}
			if (tipo == 3){
				arquivo = "imagens/inferno3.jpg";
			}
			if (quebrada<=5){
                if(!Invet){
				    document.getElementById("Inferno").src = arquivo;
				    if (tipo== 3){
					    quebrada = quebrada+1;
                        Invet = true;
						adicionar.classList.remove("mapasvet");
						document.getElementById("inf").style.visibility = "hidden";
						playSoundveto()
				    }
                }
			}
			if(quebrada == 6){
				if(!Invet){
					function adicionarSeletor(){						
						document. getElementById('Inferno'). src ='imagens/inferno4.jpg'
						adicionar.classList.remove("mapasvet");							
						adicionar.classList.add("foto05");
						document.getElementById("inf").style.visibility = "hidden";
					}
					adicionarSeletor()
				}
				randomizarFotos()
				playSoundgo()
			}
		}
		function Vetoanu(tipo){
			var adicionar = document.getElementById("Anubis");
			if (tipo == 1){
				arquivo = "imagens/anubis2.jpg";
			}
			if (tipo == 2){
				arquivo = "imagens/anubis.jpg";	
			}
			if (tipo == 3){
				arquivo = "imagens/anubis3.jpg";
			}
			if(!Anvet){
			    if (quebrada<=5){
				    document.getElementById("Anubis").src = arquivo;
				    if (tipo== 3){
					    quebrada = quebrada+1;
                        Anvet = true;
						adicionar.classList.remove("mapasvet");
						document.getElementById("anu").style.visibility = "hidden";
						playSoundveto()
				    }
			    }
            }
			if(quebrada == 6){
				if(!Anvet){
					function adicionarSeletor(){						
						document. getElementById('Anubis'). src ='imagens/anubis4.jpg'
						adicionar.classList.remove("mapasvet");							
						adicionar.classList.add("foto05");
						document.getElementById("anu").style.visibility = "hidden";
					}
					adicionarSeletor()
				}
				randomizarFotos()
				playSoundgo()
			}
		}
		function Vetoanc(tipo){
			var adicionar = document.getElementById("Ancient");
			if (tipo == 1){
				arquivo = "imagens/ancient2.jpg";
			}
			if (tipo == 2){
				arquivo = "imagens/ancient.jpg";	
			}
			if (tipo == 3){
				arquivo = "imagens/ancient3.jpg";
			}
			if(!Ancvet){
			    if (quebrada<=5){
				    document.getElementById("Ancient").src = arquivo;
				    if (tipo== 3){
					    quebrada = quebrada+1;
                        Ancvet = true;
						adicionar.classList.remove("mapasvet");	
						document.getElementById("anc").style.visibility = "hidden";
						playSoundveto()
				    }
			    }
            }
			if(quebrada == 6){
				if(!Ancvet){
					function adicionarSeletor(){
						document. getElementById('Ancient'). src ='imagens/ancient4.jpg'	
						adicionar.classList.remove("mapasvet");											
						adicionar.classList.add("foto05");
						document.getElementById("anc").style.visibility = "hidden";
					}
					adicionarSeletor()
				}
				randomizarFotos()
				playSoundgo()
			}	
		}
		function Vetonu(tipo){
			var adicionar = document.getElementById("Nuke");
			if (tipo == 1){
				arquivo = "imagens/Nuke2.jpg";
			}
			if (tipo == 2){
				arquivo = "imagens/Nuke.jpg";	
			}
			if (tipo == 3){
				arquivo = "imagens/Nuke3.jpg";
			}
			if(!Nuvet){
			    if (quebrada<=5){
				    document.getElementById("Nuke").src = arquivo;
				    if (tipo== 3){
					    quebrada = quebrada+1;
                        Nuvet = true;
						adicionar.classList.remove("mapasvet");
						document.getElementById("nuk").style.visibility = "hidden";
						playSoundveto()
				    }
			    }
            }
			if(quebrada == 6){
				if(!Nuvet){
					function adicionarSeletor(){
						document. getElementById('Nuke'). src ='imagens/Nuke4.jpg';	
						adicionar.classList.remove("mapasvet");						
						adicionar.classList.add("foto05");
						document.getElementById("nuk").style.visibility = "hidden";
					}
					adicionarSeletor()
				}
				randomizarFotos()
				playSoundgo()
			}	
		}
		function Vetoov(tipo){
			var adicionar = document.getElementById("Overpass");
			if (tipo == 1){
				arquivo = "imagens/Overpass2.jpg";
			}
			if (tipo == 2){
				arquivo = "imagens/Overpass.jpg";	
			}
			if (tipo == 3){
				arquivo = "imagens/Overpass3.jpg";
			}
            if(!Ovet){
			    if (quebrada<=5){
				    document.getElementById("Overpass").src = arquivo;
				    if (tipo== 3){
					    quebrada = quebrada+1;
                        Ovet = true;
						adicionar.classList.remove("mapasvet");
						document.getElementById("ove").style.visibility = "hidden";
						playSoundveto()
				    }
			    }
            }
			if(quebrada == 6){
				if(!Ovet){
					function adicionarSeletor(){
						document. getElementById('Overpass'). src ='imagens/overpass4.jpg';
						adicionar.classList.remove("mapasvet");
						adicionar.classList.add("foto06");
						document.getElementById("ove").style.visibility = "hidden";
					}
					adicionarSeletor()
				}
				randomizarFotos()
				playSoundgo()
			}	
		}
		function Vetove(tipo){
			var adicionar = document.getElementById("Vertigo");
			if (tipo == 1){
				arquivo = "imagens/vertigo2.jpg";
			}
			if (tipo == 2){
				arquivo = "imagens/vertigo.jpg";	
			}
			if (tipo == 3){
				arquivo = "imagens/vertigo3.jpg";
			}
            if(!Vert){
			    if (quebrada<=5){
				    document.getElementById("Vertigo").src = arquivo;
				    if (tipo== 3){
					    quebrada = quebrada+1;
                        Vert = true;
						adicionar.classList.remove("mapasvet");
						document.getElementById("ver").style.visibility = "hidden";
						playSoundveto()
				    }
			    }
				if(quebrada == 6){
					if(!Vert){
						function adicionarSeletor(){
							document. getElementById('Vertigo'). src ='imagens/vertigo4.jpg';
							adicionar.classList.remove("mapasvet");
							adicionar.classList.add("foto07");
							document.getElementById("ver").style.visibility = "hidden";
						}
						adicionarSeletor()
					}
					randomizarFotos()
					playSoundgo()
				}	
            }
		}

		  
		  