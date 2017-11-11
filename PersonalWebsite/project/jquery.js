var tl = new TimelineLite();

tl.pause();

tl.staggerFrom(".stagger", 4, {
  opacity: 0,
  y: -400
}, 0.4)

$('#discover').click(
  function() {
    TweenMax.to($(this), 1, {
      opacity: 0
    });
    tl.restart();
  })

$("#sail").hover(
    function() {
      TweenMax.to($(this), 1, {
        opacity: 0.7
      });
      TweenMax.to($(" .sail"), 1, {
        opacity: 1
      });
      $(".sail").hover(
         function() {
            TweenMax.to($(this), 1, {
              opacity: 0.7
            });
            $("#mainsail").hover(
              function() {
                TweenMax.to($("#mainsail p" ), 1, {
                  css:{color:"#000000"}
                });
              },
              function() {
                TweenMax.to($("#mainsail p"), 1, {
                  css:{color:"#ffffff"}
                });
          	})
          	$("#foresail").hover(
              function() {
                TweenMax.to($("#foresail p" ), 1, {
                  css:{color:"#000000"}
                });
              },
              function() {
                TweenMax.to($("#foresail p"), 1, {
                  css:{color:"#ffffff"}
                });
          	})
    	},
    	function() {
      		TweenMax.to($(this), 1, {
       		 opacity: 0
      		});
        })
  },
  function() {
    TweenMax.to($(this), 1, {
      opacity: 1
    });
    TweenMax.to($(" .sail"), 1, {
      opacity: 0
    });
  })
$("#boat").hover(
  function() {
    TweenMax.to($(this), 1, {
      opacity: 0.7
    });
    TweenMax.to($(" .boat"), 1, {
      opacity: 1
    });
    $(" .boat").hover(
      function() {
        TweenMax.to($(this), 1, {
          opacity: 0.7
        });
        $("#centreboard").hover(
             function() {
                TweenMax.to($("#centreboard p" ), 1, {
                  css:{color:"#000000"}
                });
              },
              function() {
                TweenMax.to($("#centreboard p"), 1, {
                  css:{color:"#ffffff"}
                });
          	})
        $("#rudder").hover(
              function() {
                TweenMax.to($("#rudder p" ), 1, {
                  css:{color:"#000000"}
                });
              },
              function() {
                TweenMax.to($("#rudder p"), 1, {
                  css:{color:"#ffffff"}
                });
          	})
      },
      function() {
        TweenMax.to($(this), 1, {
          opacity: 0
        });
      })
  },
  function() {
    TweenMax.to($(this), 1, {
      opacity: 1
    });
    TweenMax.to($(" .boat"), 1, {
      opacity: 0
    });
  })
$("#lines").hover(
  function() {
    TweenMax.to($(this), 1, {
      opacity: 0.7
    });
    TweenMax.to($(".lines"), 1, {
      opacity: 1
    });
    $(" .lines").hover(
      function() {
        TweenMax.to($(this), 1, {
          opacity: 0.7
        });
        $("#mainsheet").hover(
              function() {
                TweenMax.to($("#mainsheet p" ), 1, {
                  css:{color:"#000000"}
                });
              },
              function() {
                TweenMax.to($("#mainsheet p"), 1, {
                  css:{color:"#ffffff"}
                });
          	})
        $("#jibsheet").hover(
              function() {
                TweenMax.to($("#jibsheet p" ), 1, {
                  css:{color:"#000000"}
                });
              },
              function() {
                TweenMax.to($("#jibsheet p"), 1, {
                  css:{color:"#ffffff"}
                });
          	})
      },
      function() {
        TweenMax.to($(this), 1, {
          opacity: 0
        });
      })
  },
  function() {
    TweenMax.to($(this), 1, {
      opacity: 1
    });
    TweenMax.to($(".lines"), 1, {
      opacity: 0
    });
  })
