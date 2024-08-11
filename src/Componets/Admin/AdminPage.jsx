import React, { useState, useContext, useEffect } from 'react';
import { Form, Button, Card, Col, Row, Modal, Alert } from 'react-bootstrap';
import { DataContext } from '../../Context/DataContext';
import '../Styles/adminStyle.css';
import { useNavigate } from 'react-router-dom';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardItem from '../CardItem';

const initialProduct = { id: '', img: '', title: '', desc: '', category: '', price: '' };

const AdminPage = () => {
    const { shopData, setShopData } = useContext(DataContext); // Use Context API
    const [product, setProduct] = useState(initialProduct);
    // const [products, setProducts] = useState(shopData || []);
    const [imagePreview, setImagePreview] = useState('');
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        localStorage.removeItem('adminUsername', encryptedUsername);
        localStorage.removeItem('adminPassword', encryptedPassword);
        navigate('/adminlogin');
    };

    // useEffect(() => {
    //     setShopData(shopData);
    // }, [shopData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setProduct((prev) => ({ ...prev, img: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddProduct = (e) => {
        e.preventDefault();

        // Check if the product ID already exists only if it's a new product
        const isEditing = product.id && shopData.some((p) => p.id === product.id);
        const existingProduct = shopData.find((p) => p.id === product.id);

        if (existingProduct) {
            if (product.id === existingProduct.id) {
                setError('Product ID already exists. Please use a different ID.');
                return;
            }
        }

        if (product.id && product.title && product.price) {
            const updatedProducts = existingProduct
                ? shopData.map((p) => (p.id === product.id ? product : p))
                : [...shopData, product];

            // setShopData(updatedProducts);
            setShopData(updatedProducts); // Update Context API
            setProduct(initialProduct);
            setImagePreview('');
            setError('');
            setShowModal(false); // Close modal
        }
    };

    const handleEditProduct = (id) => {
        const prod = shopData.find((p) => p.id === id);
        setProduct(prod);
        setImagePreview(prod.img);
        setError('');
        setShowModal(true);
    };

    const handleRemoveProduct = (id) => {
        const updatedProducts = shopData.filter((p) => p.id !== id);
        // setShopData(updatedProducts);
        setShopData(updatedProducts); // Update Context API
    };

    const handleShowModal = () => {
        setProduct(initialProduct);
        setImagePreview('');
        setError('');
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setProduct(initialProduct);
        setImagePreview('');
        setError('');
    };

    return (
        <div className="container mt-5">
            <div className="w-100 d-flex justify-content-between mb-4 align-items-center">
                <h1>Admin Dashboard</h1>
                <Button variant="outline-dark" onClick={handleLogout}>Logout →</Button>
            </div>

            <Button variant="dark" className="mb-4 btnStyle" onClick={handleShowModal}>
                Add New Product
            </Button>

            <Row>
                {shopData.length > 0 ? (
                    // <>
                        shopData.map((p) => (
                        <Col key={p.id} lg={3} md={4} sm={6} xs={12} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <div className="w-100 d-flex justify-content-end">
                                        <FontAwesomeIcon icon={faPenToSquare} className='mx-2 crudIconStyle' onClick={() => handleEditProduct(p.id)} />
                                        <FontAwesomeIcon icon={faTrashCan} className='mx-2 trashStyle' onClick={() => handleRemoveProduct(p.id)} />
                                    </div>

                                    <Card.Title>{p.title}</Card.Title>
                                    <Card.Text>
                                        <strong>Category:</strong> {p.category}
                                    </Card.Text>
                                    <Card.Text className='paragraphStyle card-desc'>
                                        <strong style={{ color: "black" }}>Description: </strong>{p.desc}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>Price:</strong> Rs. {p.price}
                                    </Card.Text>
                                    {p.img && (
                                        <img
                                            src={p.img}
                                            alt={p.title}
                                            style={{ maxWidth: '10rem', maxHeight: '10rem' }}
                                        />
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                        ))
                ) : (
                    <p>No products available</p>
                )}
            </Row>

            <Modal show={showModal} onHide={handleCloseModal} dialogClassName="m-auto custom-modal my-2">
                <Modal.Header closeButton>
                    <Modal.Title>{product.id ? 'Edit Product' : 'Add New Product'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleAddProduct}>
                        <Form.Group className="mb-3">
                            <Form.Label>ID</Form.Label>
                            <Form.Control
                                type="text"
                                name="id"
                                value={product.id}
                                onChange={handleInputChange}
                                placeholder="Product ID"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image Upload</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                required
                            />
                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    style={{ maxWidth: '10rem', maxHeight: "8rem", marginTop: '10px' }}
                                />
                            )}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={product.title}
                                onChange={handleInputChange}
                                placeholder="Product Title"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="desc"
                                value={product.desc}
                                onChange={handleInputChange}
                                placeholder="Product Description"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                name="category"
                                value={product.category}
                                onChange={handleInputChange}
                                placeholder="Product Category"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                value={product.price}
                                onChange={handleInputChange}
                                placeholder="Product Price"
                                required
                            />
                        </Form.Group>
                        <Button variant="dark" type="submit" className='btnStyle'>
                            {product.id ? 'Update Product' : 'Add Product'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default AdminPage;
