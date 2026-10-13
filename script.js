/**
 * Midnight Rooftop — Minimalist 2-Phase SVG Sketch Animation
 * Author: @saklin_01 (GitHub: @saklincodes)
 * Standalone Vanilla JavaScript • Zero External Dependencies
 */

(function () {
  'use strict';

  // --- ARTWORK PATH DATASET ---
  const ART_DATA = {
    // Phase 1: Continuous Outer Silhouette Loop (~7.5s)
    phase1: "M 688 290 L 691 292 L 683 303 L 682 316 L 691 308 L 716 299 L 719 301 L 716 307 L 727 308 L 748 298 L 750 300 L 740 314 L 759 317 L 775 336 L 783 338 L 794 336 L 796 338 L 780 349 L 790 360 L 791 370 L 803 374 L 800 378 L 790 381 L 794 391 L 792 402 L 796 405 L 793 408 L 788 407 L 785 413 L 783 411 L 782 417 L 800 408 L 823 406 L 841 411 L 855 419 L 880 444 L 905 495 L 934 532 L 952 540 L 989 549 L 1008 565 L 1013 576 L 1013 588 L 1009 593 L 1007 577 L 998 565 L 980 555 L 952 549 L 968 566 L 980 570 L 993 582 L 1009 603 L 1016 620 L 1035 637 L 1050 658 L 1054 681 L 1047 692 L 1045 690 L 1048 682 L 1047 668 L 1039 654 L 1026 643 L 1035 679 L 1037 704 L 1035 720 L 1038 726 L 1044 734 L 1058 734 L 1075 740 L 1086 752 L 1099 784 L 1120 798 L 1130 808 L 1138 822 L 1145 824 L 407 824 L 414 817 L 424 816 L 433 809 L 450 808 L 469 800 L 481 771 L 466 737 L 457 726 L 448 708 L 446 669 L 450 657 L 463 642 L 477 636 L 492 637 L 510 648 L 510 632 L 526 596 L 540 535 L 549 512 L 559 501 L 578 494 L 590 477 L 602 476 L 606 468 L 615 460 L 640 467 L 655 468 L 657 461 L 650 459 L 652 455 L 650 443 L 637 433 L 631 418 L 627 422 L 623 420 L 627 413 L 617 403 L 618 390 L 624 380 L 615 378 L 611 374 L 622 370 L 625 360 L 636 347 L 627 342 L 637 340 L 651 327 L 663 326 L 664 316 L 670 305 L 687 291 Z",

    // Phase 2: Full Authentic Manga Linework Details (~4.2s, 201 paths)
    phase2: [
      "M 688 293 L 677 301 L 668 312 L 666 318 L 666 323 L 668 325 L 667 329 L 653 329 L 647 332", "M 655 338 L 644 342 L 630 357 L 625 365 L 625 371 L 622 374 L 615 374", "M 623 374 L 623 376 L 629 376",
      "M 631 376 L 633 378 L 630 381 L 632 380", "M 632 374 L 629 377 L 629 382 L 623 386 L 620 396 L 621 406", "M 626 410 L 630 408 L 633 402",
      "M 636 405 L 634 420 L 648 433 L 648 437 L 645 438 L 639 432 L 638 424", "M 638 422 L 636 413", "M 630 409 L 630 413 L 626 420",
      "M 629 405 L 628 391 L 624 387", "M 626 370 L 635 362", "M 631 365 L 635 354",
      "M 630 342 L 642 343", "M 652 349 L 656 344 L 663 340 L 671 341", "M 672 347 L 670 347 L 661 356 L 657 362 L 654 373",
      "M 687 344 L 695 350 L 697 356", "M 695 349 L 698 350 L 704 357 L 709 369", "M 746 399 L 743 414",
      "M 759 422 L 763 422 L 764 424 L 763 430 L 759 435 L 755 446 L 750 451 L 747 451 L 745 441 L 755 426 L 759 423", "M 762 432 L 770 426 L 772 427 L 770 425", "M 772 421 L 772 425 L 776 425 L 788 416 L 798 412 L 808 410 L 829 410 L 837 412 L 843 417 L 858 424 L 870 436 L 881 451 L 900 492 L 900 500 L 922 539 L 935 555 L 947 566 L 947 569 L 944 570 L 927 557 L 908 538 L 908 536 L 898 525",
      "M 899 512 L 888 485 L 882 477", "M 877 473 L 879 470 L 876 464 L 879 461", "M 879 463 L 885 475 L 881 477 L 878 487 L 872 492",
      "M 869 488 L 867 489 L 873 478 L 875 467", "M 875 458 L 875 463 L 878 459 L 874 456 L 868 442", "M 856 444 L 864 462",
      "M 868 477 L 866 491 L 854 505 L 851 515 L 847 517 L 848 530 L 846 544 L 843 550 L 829 540 L 829 536 L 840 516 L 839 513 L 817 515 L 790 510", "M 775 510 L 791 517 L 805 529 L 814 557 L 825 625", "M 859 642 L 859 668 L 855 669",
      "M 858 670 L 858 674 L 855 675", "M 858 675 L 858 682", "M 867 686 L 867 696",
      "M 859 694 L 859 699 L 863 708 L 866 711 L 875 714", "M 875 710 L 874 712 L 883 721 L 886 723 L 887 722 L 886 715 L 881 704", "M 899 698 L 905 707 L 907 704 L 901 685 L 891 668 L 889 656 L 886 654 L 887 624 L 882 591 L 875 570 L 871 565 L 867 552 L 868 548 L 859 530 L 859 526 L 856 519 L 851 516",
      "M 856 518 L 864 526", "M 859 525 L 862 525 L 874 536 L 880 520 L 877 516 L 869 512 L 857 510", "M 854 509 L 867 503 L 876 494 L 878 488",
      "M 890 489 L 891 486 L 888 484 L 889 481", "M 893 490 L 898 500", "M 901 495 L 921 523",
      "M 913 520 L 918 521 L 932 535 L 940 539 L 944 543 L 945 547 L 960 562 L 963 563 L 965 569 L 978 572 L 980 574 L 979 577 L 983 582 L 999 594 L 1011 612 L 1012 619 L 1035 641 L 1045 656 L 1051 672 L 1051 680 L 1048 689", "M 1030 697 L 1033 696 L 1031 678", "M 1028 681 L 1026 692",
      "M 1013 690 L 1014 681", "M 1012 671 L 1012 692 L 1006 701 L 1004 714 L 993 730 L 989 730", "M 976 738 L 980 738 L 988 732 L 995 704 L 988 674 L 967 629",
      "M 964 630 L 972 663 L 973 686 L 970 696 L 970 704 L 964 714 L 957 720", "M 971 702 L 973 701 L 977 688 L 979 658", "M 978 629 L 977 619 L 971 600 L 962 586 L 962 583 L 948 569",
      "M 947 564 L 958 566 L 959 562", "M 954 555 L 947 548", "M 942 540 L 944 542 L 970 548",
      "M 970 572 L 970 576 L 963 586 L 966 588 L 963 584", "M 966 586 L 976 591 L 994 606 L 997 604 L 993 590", "M 993 588 L 989 581 L 984 577",
      "M 978 577 L 971 575", "M 1000 561 L 999 562 L 1003 566 L 1004 565 L 1001 562", "M 1007 570 L 1005 565 L 993 554 L 980 548 L 971 548 L 991 557 L 1007 571 L 1010 577 L 1010 590",
      "M 1007 608 L 1007 613 L 1005 614 L 997 608 L 997 606", "M 992 612 L 997 618 L 1000 619 L 998 622 L 997 619 L 999 619", "M 1001 621 L 1004 626 L 1003 630 L 1005 631 L 1005 629",
      "M 1010 626 L 1014 629 L 1015 635 L 1017 637 L 1019 635 L 1017 633 L 1018 635 L 1016 635", "M 1019 637 L 1025 650 L 1029 665 L 1030 676 L 1027 681 L 1024 679 L 1019 660 L 1011 650 L 1008 641 L 1005 639", "M 1020 636 L 1025 637 L 1037 648",
      "M 1017 660 L 1013 658 L 1013 654", "M 999 623 L 1005 637 L 1004 643 L 1013 666 L 1013 670 L 1016 674 L 1016 679 L 1033 703 L 1032 724 L 1034 726 L 1031 729 L 1029 745", "M 1017 734 L 1008 753 L 998 765 L 997 763",
      "M 1018 783 L 1018 785 L 1010 792 L 986 809", "M 968 789 L 981 780 L 996 765 L 996 762 L 1009 744 L 1014 732", "M 1034 727 L 1045 739 L 1048 746 L 1048 751 L 1043 763 L 1020 782 L 1016 782 L 985 797 L 957 804 L 941 804 L 911 796",
      "M 905 762 L 894 758", "M 884 764 L 880 766 L 872 765", "M 889 747 L 887 746 L 886 725",
      "M 887 723 L 891 733 L 891 744 L 885 762 L 888 763 L 894 757 L 899 747 L 902 750 L 902 756 L 906 762 L 911 759 L 912 756", "M 916 756 L 924 759 L 930 759 L 934 756 L 934 754", "M 935 747 L 927 749",
      "M 949 745 L 950 750 L 953 753 L 961 753", "M 901 747 L 902 736 L 905 728 L 914 728 L 919 726 L 925 720 L 925 717 L 916 716 L 909 711", "M 907 707 L 908 711 L 906 726 L 902 727 L 902 722",
      "M 865 734 L 861 731 L 853 716 L 849 713 L 849 710 L 845 705 L 832 676", "M 855 658 L 854 675 L 857 682 L 858 691 L 867 703 L 874 710 L 875 709 L 865 681 L 865 666 L 869 647 L 871 623 L 868 609", "M 873 625 L 871 624 L 874 628 L 882 656 L 885 659 L 885 672 L 892 675 L 891 679",
      "M 892 682 L 892 686 L 890 688 L 885 687 L 885 674", "M 856 652 L 860 631 L 859 594 L 855 555 L 850 531", "M 841 514 L 844 513 L 845 510",
      "M 840 508 L 834 505 L 811 483", "M 810 488 L 796 472", "M 811 490 L 817 496 L 832 504",
      "M 825 496 L 816 487", "M 849 481 L 849 500", "M 836 514 L 838 517 L 828 522 L 805 528",
      "M 799 546 L 792 580", "M 791 597 L 770 653 L 766 687 L 763 693 L 760 688 L 754 655 L 751 613", "M 773 618 L 779 567",
      "M 750 529 L 737 542", "M 735 500 L 703 514 L 683 515", "M 699 515 L 681 523 L 664 527 L 647 525 L 638 520 L 636 517",
      "M 654 524 L 629 512 L 601 486 L 597 479 L 591 480 L 584 487 L 581 496 L 560 503 L 554 509 L 547 523 L 534 570 L 527 606 L 523 609 L 513 632 L 512 643 L 514 654 L 512 655 L 497 642 L 488 639 L 473 640 L 465 644 L 452 659 L 449 669 L 449 684 L 451 691 L 452 712 L 462 729 L 466 729 L 463 717 L 452 698", "M 458 708 L 461 706 L 457 683", "M 466 731 L 476 756 L 481 766 L 484 768 L 491 750 L 489 738 L 495 723 L 501 718 L 514 718 L 526 724",
      "M 532 727 L 546 742 L 546 747 L 535 764 L 529 763 L 521 755 L 510 749 L 498 745 L 491 745", "M 494 722 L 490 714 L 490 705 L 502 694 L 501 683 L 513 665", "M 514 663 L 514 678",
      "M 516 698 L 529 693 L 545 693 L 548 695", "M 529 713 L 542 721", "M 547 746 L 554 746 L 561 741 L 563 727 L 573 714",
      "M 576 665 L 579 706 L 578 710 L 574 712 L 577 716 L 576 723 L 570 739 L 559 760 L 561 780 L 567 791", "M 573 796 L 589 814 L 607 824 L 612 824", "M 566 824 L 560 818 L 554 806 L 554 797 L 559 780",
      "M 549 781 L 538 803 L 537 822 L 539 824 L 537 824", "M 526 824 L 523 824 L 507 801", "M 495 806 L 491 816",
      "M 493 824 L 496 821 L 497 814 L 502 804 L 506 800 L 514 784 L 528 763", "M 485 768 L 476 792 L 468 806 L 450 811 L 435 812 L 424 819", "M 420 820 L 421 823 L 416 824",
      "M 407 824 L 420 819 L 427 822 L 435 818 L 439 818", "M 498 651 L 512 662 L 515 661 L 514 656", "M 510 654 L 502 646",
      "M 526 622 L 527 607", "M 564 629 L 573 663 L 576 664 L 576 634 L 574 628", "M 616 675 L 632 705 L 648 727 L 679 759 L 695 771",
      "M 671 752 L 658 739", "M 668 810 L 691 804 L 717 791 L 745 772 L 768 750", "M 764 754 L 755 763",
      "M 766 769 L 773 732 L 776 730 L 776 716", "M 764 713 L 764 703", "M 764 693 L 764 702 L 775 715 L 777 714 L 777 702",
      "M 776 731 L 777 738", "M 773 739 L 777 739 L 779 747 L 801 777", "M 792 767 L 791 785 L 783 805 L 765 824 L 760 824",
      "M 786 824 L 789 823 L 794 811 L 795 793 L 792 787", "M 796 795 L 801 798 L 801 814", "M 802 800 L 808 800 L 810 802 L 822 824 L 851 824 L 852 821 L 862 814 L 862 812",
      "M 861 816 L 862 819 L 866 821 L 865 824 L 863 821", "M 867 805 L 866 806 L 864 804 L 863 799", "M 863 796 L 868 805 L 862 811 L 858 801 L 858 794",
      "M 858 788 L 858 793 L 860 794 L 862 792 L 862 788 L 860 787", "M 847 783 L 842 790", "M 813 793 L 834 798 L 860 786 L 863 776 L 863 767 L 850 745",
      "M 847 750 L 847 746 L 849 744 L 849 714", "M 833 707 L 831 687 L 832 673 L 829 663 L 826 635 L 826 626 L 829 621 L 830 611 L 829 558", "M 837 569 L 850 614 L 850 640 L 852 657 L 855 657 L 855 654 L 853 653",
      "M 902 629 L 904 630 L 901 627 L 901 625 L 903 625 L 901 624", "M 901 620 L 909 637 L 930 669 L 932 668 L 931 663 L 918 636", "M 899 615 L 899 619 L 896 618 L 898 612 L 892 598",
      "M 887 599 L 896 616", "M 917 587 L 907 569 L 900 550 L 898 549", "M 884 520 L 897 547 L 899 546 L 899 543 L 884 507",
      "M 847 470 L 849 480 L 847 481 L 845 473 L 846 467 L 839 453", "M 855 448 L 852 444 L 855 444 L 854 441", "M 833 425 L 834 427 L 836 426 L 851 442 L 853 439 L 844 430 L 823 420 L 805 419 L 796 422",
      "M 785 410 L 783 395", "M 775 394 L 777 414 L 770 422 L 768 420 L 769 416", "M 777 415 L 777 422",
      "M 777 412 L 779 411 L 782 403", "M 793 405 L 789 403 L 791 392 L 786 383", "M 785 378 L 785 393 L 783 394 L 781 392 L 781 387",
      "M 781 374 L 784 377 L 790 377 L 791 374 L 767 348", "M 766 343 L 775 346 L 786 343 L 793 338", "M 786 342 L 786 340 L 776 339 L 769 335",
      "M 776 346 L 775 348 L 778 352 L 787 360 L 789 372", "M 791 377 L 799 375", "M 779 361 L 779 354",
      "M 762 366 L 768 383", "M 760 385 L 762 402", "M 742 443 L 736 451 L 728 457",
      "M 727 460 L 726 457 L 720 460", "M 727 466 L 724 474 L 673 475 L 658 472 L 657 469 L 660 462", "M 658 456 L 654 457 L 655 451",
      "M 656 447 L 656 451 L 659 454 L 661 462 L 666 461 L 670 457 L 670 452", "M 667 461 L 671 458 L 675 464", "M 684 464 L 690 460 L 696 464 L 699 463",
      "M 702 469 L 699 465 L 704 470 L 706 469", "M 726 474 L 735 474 L 745 464 L 745 475 L 754 481 L 756 470", "M 762 468 L 761 472 L 765 486",
      "M 758 494 L 766 495 L 773 502 L 775 509 L 770 510 L 765 514 L 737 543 L 711 564 L 690 576 L 670 583 L 657 583 L 651 581 L 637 573 L 621 560 L 608 546 L 597 529 L 585 504 L 583 496", "M 602 483 L 608 470 L 613 464", "M 615 463 L 621 463 L 638 469 L 657 472",
      "M 656 441 L 656 446 L 654 447 L 650 438 L 648 438", "M 648 432 L 646 420", "M 736 474 L 744 476",
      "M 755 481 L 758 493 L 741 497", "M 746 464 L 751 451", "M 825 411 L 826 413 L 830 412 L 830 414 L 833 414 L 834 412",
      "M 748 318 L 747 319 L 750 322 L 768 335 L 769 331 L 758 319 L 734 316", "M 739 309 L 731 316 L 714 318", "M 714 314 L 715 312 L 704 318",
      "M 712 310 L 697 312 L 695 310", "M 681 300 L 678 309 L 678 320 L 681 322 L 694 309 L 700 306 L 709 305 L 713 310 L 726 311 L 741 307 L 747 300", "M 557 531 L 556 548 L 559 578 L 571 626 L 575 626 L 573 562",
      "M 932 669 L 937 682 L 943 711 L 943 730 L 940 742 L 936 746 L 936 755 L 938 755 L 949 743 L 956 723 L 957 697 L 955 678", "M 964 627 L 966 628 L 965 630 L 963 628 L 963 624 L 957 612 L 950 602", "M 1044 737 L 1056 737 L 1072 741 L 1081 750 L 1088 763 L 1093 779 L 1101 791 L 1102 796 L 1109 808",
      "M 1100 789 L 1118 800 L 1129 811 L 1134 823 L 1075 824", "M 1092 779 L 1076 767 L 1070 766 L 1059 753 L 1052 748 L 1049 748", "M 1069 766 L 1074 775 L 1079 796 L 1079 807 L 1074 824 L 884 824",
      "M 1276 173 C 1220 180, 1175 230, 1178 285 C 1180 305, 1210 325, 1247 325 C 1210 295, 1225 220, 1276 173 Z", "M -2000 825 L 3500 825", "M 0 750 L 193 750 L 193 825 M 127 750 L 127 825"
    ],

    // Pinpoint stars in deep OLED sky
    stars: [
      { x: 1349, y: 101, s: 1.8 }, { x: 680, y: 162, s: 1.8 }, { x: 966, y: 181, s: 1.8 }, { x: 1527, y: 238, s: 2.2 }, { x: 435, y: 263, s: 2.2 }, { x: 217, y: 348, s: 1.8 }, { x: 1392, y: 377, s: 1.8 }, { x: 292, y: 492, s: 2.2 }, { x: 1474, y: 506, s: 2.2 }, { x: 1281, y: 638, s: 2.2 }, { x: 172, y: 646, s: 2.2 }
    ]
  };

  // --- CONFIGURATION ---
  const CONFIG = {
    phase1Duration: 7500,
    phase2Duration: 4200,
    transitionDelay: 120,
    baseWidth: 1672,
    baseHeight: 941
  };

  // --- DOM ELEMENTS ---
  const stage = document.getElementById('stage');
  const svg = document.getElementById('sketch-svg');
  const layerPhase1 = document.getElementById('layer-phase1');
  const layerPhase2 = document.getElementById('layer-phase2');
  const layerStars = document.getElementById('layer-stars');
  const penCursor = document.getElementById('pen-cursor');
  const particleCanvas = document.getElementById('particle-canvas');
  const ctx = particleCanvas.getContext('2d');
  const statusToast = document.getElementById('status-toast');

  // --- ANIMATION STATE ---
  let isRunning = false;
  let isPaused = false;
  let animationStartTime = 0;
  let pausedElapsed = 0;
  let rafId = null;

  let phase1Element = null;
  let phase1Length = 0;
  let phase2Metrics = [];
  let starElements = [];

  const particles = [];
  const MAX_PARTICLES = 180;
  let dpr = 1;
  let toastTimer = null;

  // --- INITIALIZATION ---
  function init() {
    setupResponsiveViewBox();
    buildSvgElements();
    setupCanvas();
    setupEventListeners();
    startAnimation();
  }

  // --- RESPONSIVE VIEWBOX (Instagram Reels 9:16 & Desktop Adaptation) ---
  function setupResponsiveViewBox() {
    const w = window.innerWidth, h = window.innerHeight;
    const aspect = w / h;

    if (aspect < 1.0) {
      // Portrait / Instagram Reels (9:16 format)
      const targetWidth = 1120;
      const targetHeight = targetWidth / aspect;
      const minX = 775 - (targetWidth / 2);
      const minY = 825 - (targetHeight * 0.65);
      svg.setAttribute('viewBox', `${minX} ${minY} ${targetWidth} ${targetHeight}`);
    } else {
      // Landscape / Desktop widescreen
      svg.setAttribute('viewBox', `0 0 ${CONFIG.baseWidth} ${CONFIG.baseHeight}`);
    }
  }

  function setupCanvas() {
    dpr = window.devicePixelRatio || 1;
    particleCanvas.width = window.innerWidth * dpr;
    particleCanvas.height = window.innerHeight * dpr;
    particleCanvas.style.width = window.innerWidth + 'px';
    particleCanvas.style.height = window.innerHeight + 'px';
    ctx.scale(dpr, dpr);
  }

  // --- BUILD SVG ELEMENTS ---
  function buildSvgElements() {
    layerPhase1.innerHTML = '';
    layerPhase2.innerHTML = '';
    layerStars.innerHTML = '';

    // Phase 1 Silhouette
    const p1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    p1.setAttribute('d', ART_DATA.phase1);
    p1.setAttribute('id', 'path-silhouette');
    layerPhase1.appendChild(p1);
    phase1Element = p1;
    phase1Length = p1.getTotalLength();
    p1.style.strokeDasharray = `${phase1Length} ${phase1Length}`;
    p1.style.strokeDashoffset = `${phase1Length}`;

    // Phase 2 Details
    phase2Metrics = [];
    const elements = [];
    let totalLen = 0;

    ART_DATA.phase2.forEach((dStr, idx) => {
      const p2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      p2.setAttribute('d', dStr);
      p2.setAttribute('id', `path-detail-${idx}`);
      layerPhase2.appendChild(p2);

      const len = p2.getTotalLength();
      p2.style.strokeDasharray = `${len} ${len}`;
      p2.style.strokeDashoffset = `${len}`;
      elements.push(p2);
      totalLen += len;
    });

    let currentCum = 0;
    elements.forEach((el) => {
      const len = el.getTotalLength();
      const duration = (len / (totalLen || 1)) * CONFIG.phase2Duration;
      phase2Metrics.push({ el, len, start: currentCum, end: currentCum + duration, duration });
      currentCum += duration;
    });

    // Stars
    starElements = [];
    ART_DATA.stars.forEach((st, idx) => {
      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('cx', st.x);
      c.setAttribute('cy', st.y);
      c.setAttribute('r', st.s);
      c.setAttribute('class', 'star-point');
      c.setAttribute('id', `star-${idx}`);
      c.style.opacity = '0';
      layerStars.appendChild(c);
      starElements.push(c);
    });
  }

  function getScreenCoords(svgPoint) {
    const pt = svg.createSVGPoint();
    pt.x = svgPoint.x;
    pt.y = svgPoint.y;
    const ctm = svg.getScreenCTM();
    return ctm ? pt.matrixTransform(ctm) : { x: 0, y: 0 };
  }

  // --- MICRO-SPARKLE PARTICLES ---
  function emitMicroSparkle(svgPoint) {
    if (particles.length >= MAX_PARTICLES) return;
    const screenPt = getScreenCoords(svgPoint);
    const count = Math.random() < 0.6 ? 2 : 1;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: screenPt.x + (Math.random() - 0.5) * 3,
        y: screenPt.y + (Math.random() - 0.5) * 3,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7 - 0.2,
        life: 1.0,
        decay: 0.035 + Math.random() * 0.04,
        radius: 0.6 + Math.random() * 0.9
      });
    }
  }

  function updateParticles() {
    ctx.clearRect(0, 0, particleCanvas.width / dpr, particleCanvas.height / dpr);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.globalAlpha = p.life * 0.75;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // --- PEN TIP CONTROLLER ---
  function setPenPosition(svgPoint) {
    penCursor.setAttribute('transform', `translate(${svgPoint.x}, ${svgPoint.y})`);
    penCursor.style.opacity = '1';
    emitMicroSparkle(svgPoint);
  }

  function hidePen() {
    penCursor.style.opacity = '0';
  }

  // --- ANIMATION ENGINE ---
  function startAnimation() {
    if (rafId) cancelAnimationFrame(rafId);
    isPaused = false;
    isRunning = true;
    pausedElapsed = 0;
    particles.length = 0;

    phase1Element.style.strokeDashoffset = `${phase1Length}`;
    phase2Metrics.forEach(m => m.el.style.strokeDashoffset = `${m.len}`);
    starElements.forEach(s => s.style.opacity = '0');

    const startPt = phase1Element.getPointAtLength(0);
    penCursor.setAttribute('transform', `translate(${startPt.x}, ${startPt.y})`);
    penCursor.style.opacity = '1';

    animationStartTime = performance.now();
    rafId = requestAnimationFrame(animateLoop);
  }

  function animateLoop(now) {
    if (!isRunning || isPaused) {
      updateParticles();
      if (isPaused) rafId = requestAnimationFrame(animateLoop);
      return;
    }

    const elapsed = now - animationStartTime + pausedElapsed;
    const p1Dur = CONFIG.phase1Duration;
    const delay = CONFIG.transitionDelay;
    const p2Dur = CONFIG.phase2Duration;
    const total = p1Dur + delay + p2Dur;

    if (elapsed < p1Dur) {
      // Phase 1: Continuous Outer Silhouette (~7.5s)
      const progress = Math.min(1, Math.max(0, elapsed / p1Dur));
      const ease = progress < 0.05 ? (progress / 0.05) ** 2 * 0.05 : progress;
      const currentDist = ease * phase1Length;
      phase1Element.style.strokeDashoffset = `${phase1Length - currentDist}`;
      setPenPosition(phase1Element.getPointAtLength(currentDist));

    } else if (elapsed < p1Dur + delay) {
      // Transition breath
      phase1Element.style.strokeDashoffset = '0';
      if (phase2Metrics[0]) {
        setPenPosition(phase2Metrics[0].el.getPointAtLength(0));
      }

    } else if (elapsed < total) {
      // Phase 2: Rich Manga Linework Details (~4.2s)
      phase1Element.style.strokeDashoffset = '0';
      const p2Elapsed = elapsed - (p1Dur + delay);
      let activePenPt = null;

      for (let i = 0; i < phase2Metrics.length; i++) {
        const m = phase2Metrics[i];
        if (p2Elapsed <= m.start) {
          m.el.style.strokeDashoffset = `${m.len}`;
        } else if (p2Elapsed >= m.end) {
          m.el.style.strokeDashoffset = '0';
        } else {
          const strokeProgress = (p2Elapsed - m.start) / (m.duration || 1);
          const currentDist = Math.min(m.len, Math.max(0, strokeProgress * m.len));
          m.el.style.strokeDashoffset = `${m.len - currentDist}`;
          activePenPt = m.el.getPointAtLength(currentDist);
        }
      }

      if (activePenPt) {
        setPenPosition(activePenPt);
      } else {
        for (let i = phase2Metrics.length - 1; i >= 0; i--) {
          if (p2Elapsed >= phase2Metrics[i].end) {
            setPenPosition(phase2Metrics[i].el.getPointAtLength(phase2Metrics[i].len));
            break;
          }
        }
      }

      // Illuminate stars towards end of Phase 2
      const starProgress = Math.max(0, (p2Elapsed - (p2Dur * 0.65)) / (p2Dur * 0.35));
      if (starProgress > 0) {
        starElements.forEach(st => st.style.opacity = `${Math.min(0.85, starProgress * 0.85)}`);
      }

    } else {
      // Finished
      phase1Element.style.strokeDashoffset = '0';
      phase2Metrics.forEach(m => m.el.style.strokeDashoffset = '0');
      starElements.forEach(st => st.style.opacity = '0.85');
      hidePen();
      isRunning = false;
    }

    updateParticles();
    if (isRunning || particles.length > 0) {
      rafId = requestAnimationFrame(animateLoop);
    }
  }

  // --- CONTROLS ---
  function togglePause() {
    if (!isRunning && pausedElapsed === 0) {
      startAnimation();
      showToast('Playing');
      return;
    }
    if (isPaused) {
      isPaused = false;
      animationStartTime = performance.now();
      showToast('Resumed');
      rafId = requestAnimationFrame(animateLoop);
    } else {
      isPaused = true;
      pausedElapsed += performance.now() - animationStartTime;
      showToast('Paused');
    }
  }

  function restartAnimation() {
    isPaused = false;
    startAnimation();
    showToast('Restarted');
  }

  function showToast(text) {
    if (!statusToast) return;
    statusToast.textContent = text;
    statusToast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => statusToast.classList.remove('visible'), 1200);
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    const handleReplay = () => isRunning ? restartAnimation() : startAnimation();
    stage.addEventListener('click', handleReplay);
    stage.addEventListener('touchend', (e) => { e.preventDefault(); handleReplay(); }, { passive: false });

    window.addEventListener('keydown', (e) => {
      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        togglePause();
      } else if (e.code === 'KeyR' || e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        restartAnimation();
      }
    });

    let resizeTimer = null;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setupResponsiveViewBox();
        setupCanvas();
      }, 100);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
